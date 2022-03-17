import React, { Component } from 'react'
import Navbar from './Navbar/Navbar';
import Message from './Message/Message'
class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <h1>App Component</h1>
                <Message />
            </>
        )
    }
}

export default App
