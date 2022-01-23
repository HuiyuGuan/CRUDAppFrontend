import React from 'react';
import { Link } from 'react-router-dom';
    
export default function NavBar () {
    return (
        <div>
            <nav className='navbar'>
            <h1 className='nav-title'>CRUD App</h1>
                <div className='nav-links'>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/Campuses" className='nav-link'>Campuses</Link>
                    <Link to="/Students" className='nav-link'>Students</Link>
                </div>
            </nav>
        </div>
    );
}

