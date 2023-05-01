import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import User from'./User/User'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'/cjs/react-router-DOMException.min'
function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/index" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/User" component={User} />
                </Switch>
            </Router>
        </div>
    )
}

export default App