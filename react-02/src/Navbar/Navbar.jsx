import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark navbar-expand-lg'>
               <Link to="/index" className="navbar-brand">Rounting Examples</Link>
               <div className='ml-auto'>
                <ul className='navbar-nav'>
                <li className='nav-list'><Link to="/index" className="nav-link">Home</Link></li>
                <li className='nav-list'><Link to="/about" classname="nav-link">About</Link></li>
                <li classname='nav-list'><Link to="/service" classname="nav-link">service</Link></li>
                <li classname='nav-list'><Link to="/contact" classname="nav-link">Contact</Link></li>
                <li classname='nav-list'><Link to="/Users" classname="nav-link">/Users</Link></li>
                </ul>
               </div>
            </nav>
        )

        }
    }
    export default Navbar
