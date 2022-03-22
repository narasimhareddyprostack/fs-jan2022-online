import React, { Component } from 'react'
import Navbar from './Navbar/Navbar';
import Login from './Form/Login'
import Registration from './Form/Registration'
class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                {/*   <h1>App Component</h1> */}
                <Login />

            </>
        )
    }
}

export default App
