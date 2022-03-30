import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/reduxEx" element={<Message />} />


                        </Routes>
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default App
