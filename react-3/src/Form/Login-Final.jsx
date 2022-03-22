import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    updateHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    /* emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    } */
    submitHandler = (event) => {
        event.preventDefault();
        alert(JSON.stringify(this.state))
    }
    render() {
        return (
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="email" placeholder="Email Id" onChange={this.updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="password" placeholder="Password" onChange={this.updateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-success" />
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
