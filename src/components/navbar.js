import React, { useState } from 'react'
import logo from '../images/logo.png'
import { Link } from 'gatsby'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="navbar is-primary is-fixed">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="general-assembly-logo" className="image is-64x64" />
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
                  SEI
                </Link>
                <Link to="/uxdi" className="navbar-item">
                  <span className="course-logo uxdi-dot"></span>
                  UXDI
                </Link>
                <Link to="/dsi" className="navbar-item">
                  <span className="course-logo dsi-dot"></span>
                  DSI
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