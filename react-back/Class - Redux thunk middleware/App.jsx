import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import User from './User/User'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/user" element={<User />} />
                        </Routes>
                    </Router>
                </Provider>

            </div >
        )
    }
}

export default App
