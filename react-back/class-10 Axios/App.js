import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Dummy/Home'
import About from './Dummy/About'
import Contact from './Dummy/Contact'
import User from './User/User'
export class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/user" element={<User />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
