import React, { useState } from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="navbar is-primary is-fixed">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="general-assembly-logo" className="image is-64x64" />
          </a>
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
                <a href="/sei" className="navbar-item">
                  SEI
                </a>
                <a href="/uxdi" className="navbar-item">
                  UXDI
                </a>
                <a href="/dsi" className="navbar-item">
                  DSI
                </a>
              </div>
            </div>
            <a href="info" className="navbar-item">Event Informtion</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar