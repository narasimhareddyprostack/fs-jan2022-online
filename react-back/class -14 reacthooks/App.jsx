import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './HookEx/Message'
import Counter from './HookEx/Counter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/useState" element={<Message />} />
                        <Route path="/counter" element={<Counter />} />

                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App
