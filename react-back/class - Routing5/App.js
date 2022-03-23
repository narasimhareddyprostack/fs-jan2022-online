import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Dummy/Home'
import About from './Dummy/About'
import Contact from './Dummy/Contact'
import Login from './Form/Login'
/* import Registration from './Form/Registration' */
class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>

                </Router>
            </>
        )
    }
}

export default App
