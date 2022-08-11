import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="brand-name">
        Math Magicians
      </div>
     
      <div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Calculator">Calculator</NavLink></li>
          <li><NavLink to="/Quotes">Quotes</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
