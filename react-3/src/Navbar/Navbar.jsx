import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/index" className="navbar-brand"> React - useRef Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">useRef Ex</Link>
                        </li>


                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
