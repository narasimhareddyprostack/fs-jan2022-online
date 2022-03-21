import React, { Component } from 'react'

class Employee extends Component {
    constructor(props) {
        super(props)
        console.log("First Constructor will execute automatically");
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }
    }
    render() {
        console.log("second - Render method Will execute")
        return (
            <div>
                <h1>Employee Sala Component</h1>
            </div>
        )
    }
}

export default Employee
