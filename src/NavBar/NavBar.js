import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return(
        <nav className="black">
            <div className="nav-wrapper">
            <NavLink exact to="/" className="brand-logo">Golf Course App</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/dailyjobboard/post/add">Add New Jobs</NavLink></li>
                <li><NavLink to="/dailyjobboard/all">Job Board List</NavLink></li>
                <li><NavLink to="/employee/post/add">Employee</NavLink></li>
                <li><NavLink to="/login">Log in</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar;