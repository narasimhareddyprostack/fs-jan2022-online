import React, { Component } from 'react'
import Navbar from './Navbar/Navbar';
import Message from './Message/Message'
import Employee from './Data/Employee'
class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                {/*   <h1>App Component</h1> */}
                <Employee />
            </>
        )
    }
}

export default App
