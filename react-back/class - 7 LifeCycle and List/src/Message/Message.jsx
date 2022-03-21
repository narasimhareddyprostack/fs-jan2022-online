import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello"
    }
    messageHandler = (msg) => {
        this.setState({ msg: msg })
    }
    render() {
        return (
            <div>
                <h2>Wish Message : {this.state.msg}</h2>
                <button onClick={this.messageHandler.bind(this, "GM")}>GM</button>
                <button onClick={this.messageHandler.bind(this, "GA")}>GA</button>
                <button onClick={() => {
                    this.setState({ msg: "Good Nigth, Go for Dinner" })
                }}>GN</button>
            </div>
        )
    }
}

export default Message
