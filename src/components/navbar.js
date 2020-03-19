import React, { useState } from 'react'
import logo from '../images/logo.png'
import largeLogo from '../images/logo-large.png'
import { Link } from 'gatsby'

// TODO use the large logo on desktop and tablet screens

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="navbar is-primary is-fixed">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="logo-container">
            <img src={logo} alt="general-assembly-logo" className="image is-64x64 is-hidden-desktop is-hidden-tablet" />
            <img src={largeLogo} alt="general-assembly-logo" className="image logo-brand is-hidden-mobile" />
          </Link>
          <span       
            role="button"
            tabIndex="0"
            onClick={() => setNavOpen(!navOpen)}
            onKeyUp={() => setNavOpen(!navOpen)}
            className={`navbar-burger ${navOpen ? 'is-active' : ''}`}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>
        <div className={`navbar-menu ${navOpen ? 'is-active' : ''}`} >
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <span role="button" className="navbar-link">Meet our Grads</span>
              <div className="navbar-dropdown">
                <Link to="/sei" className="navbar-item">
                  <span className="course-logo sei-dot"></span>
                  Software Engineering
                </Link>
                <Link to="/uxdi" className="navbar-item">
                  <span className="course-logo uxdi-dot"></span>
                  User Experience Design
                </Link>
                <Link to="/dsi" className="navbar-item">
                  <span className="course-logo dsi-dot"></span>
                  Data Science
                </Link>
              </div>
            </div>
            <Link to="/info" className="navbar-item">Event Informtion</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar