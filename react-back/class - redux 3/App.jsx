import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Product from './Product/Product'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Message from './Message/Message'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/counter" element={<Product />} />
                            <Route path="/message" element={<Message />} />
                        </Routes>
                    </Router>
                </Provider>

            </div>
        )
    }
}

export default App
