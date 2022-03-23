import React, { Component } from 'react'
import Axios from 'axios'
class User extends Component {
    constructor(props) {

        super(props);
        console.log("First")
        this.state = {
            users: []
        }

    }
    componentDidMount() {
        console.log("Third")
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ users: response.data })
                //console.log(response.data)
            })
            .catch((err) => {
                console.log("Error Message")
                console.error(err)
            })
    }
    render() {
        console.log("second")
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <pre>{JSON.stringify(this.state.users)}</pre>
                        {
                            this.state.users.length > 0 ? <React.Fragment>
                                <div className="col-md-8">
                                    <table className="table table-hover">
                                        <thead className="bg-dark text-white">
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>City</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.users.map((user) => {
                                                    return <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.address.city}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </React.Fragment> : null
                        }

                    </div>
                </div>

            </div>
        )
    }
}

export default User
