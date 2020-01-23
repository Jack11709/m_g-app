import React, { useState } from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="navbar is-primary is-fixed-top is-paddingless">
      <div className="container">
        <div className="navbar-brand">
          <img src={logo} alt="general-assembly-logo" className="image is-64x64" />
          <span
            onClick={() => setNavOpen(!navOpen)}
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
              <a className="navbar-link">Meet our Grads</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  SEI
                </a>
                <a className="navbar-item">
                  UXDI
                </a>
                <a className="navbar-item">
                  DSE
                </a>
              </div>
            </div>
            <a className="navbar-item">Event Informtion</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar