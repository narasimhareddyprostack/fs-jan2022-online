import React, { Component } from 'react'

class ContactList extends Component {
    selectContact = (contact) => {
        /*  console.log(contact) */
        this.props.selContact(contact);
    }
    render() {
        return (
            <div>
                {/*  <h1>Contact List App</h1> */}
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.contacts.map((contact) => {
                                            return <tr key={contact.login.uuid} onMouseOver={this.selectContact.bind(this, contact)}>
                                                <td>{contact.login.uuid.substring(32, 36)}</td>
                                                <td>{contact.name.first}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.location.city}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactList
