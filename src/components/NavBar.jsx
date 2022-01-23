import React from 'react';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';



export default function NavBar() {

  return(
    <div>  
      <nav>
          <Link to="/" className='nav-link'>
              Home
          </Link>
          <Link to="/campuses" className='nav-link'>
              Campuses
          </Link>
          <Link to="/students" className='nav-link'>
              Students
          </Link>
      </nav>
    </div>
    );
}
