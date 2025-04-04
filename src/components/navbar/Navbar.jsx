import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Votre Nom
        </Link>
        <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleClick}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={handleClick}>
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={handleClick}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;