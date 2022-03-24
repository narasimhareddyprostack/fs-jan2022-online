import React, { Component } from 'react'

class ContactDetails extends Component {
    render() {
        return (
            <div>
                {/*  <h1>Contact Detials App</h1> */}
                {/*  <pre>{JSON.stringify(this.props)}</pre> */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={this.props.selectedData.picture.large} />
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.props.selectedData.name.first}</li>
                                        <li className="list-group-item">{this.props.selectedData.email}</li>
                                        <li className="list-group-item">{this.props.selectedData.location.city}</li>
                                        <li className="list-group-item">{this.props.selectedData.dob.age}</li>
                                        <li className="list-group-item">{this.props.selectedData.gender}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails
