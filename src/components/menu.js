import React from 'react'
import { slide as SlideMenu } from 'react-burger-menu'
import { Link } from 'gatsby'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '25px',
    right: '18px',
    top: '18px'
  },
  bmBurgerBars: {
    background: '#fff',
    height: '13%'
  },
  bmBurgerBarsHover: {
    background: '#fff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fff',
    height: '28px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#363636',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    width: '100%'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Menu = () => {
  return (
    <SlideMenu
      styles={styles}
      width={'100%'}
    >
      <div className="menu">
        <p className="menu-label title">Meet Our Grads</p>
      </div>
      <ul className="menu-list">
        <li>
          <Link to="/sei">
            Software Engineering
            <span className="course-logo sei-dot" />
          </Link>
          <Link to="/uxdi">
            User Experience Design
            <span className="course-logo uxdi-dot" />
          </Link>
          <Link to="/dsi">
            Data Science
            <span className="course-logo dsi-dot" />
          </Link>
        </li>
      </ul>
      <div className="menu">
        <p className="menu-label title">Event Information</p>
        <ul className="menu-list">
          <li>
            <Link to="/how-to-hire">
              How to Hire
            </Link>
            <Link to="/upcoming">
              Upcoming Events
            </Link>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </SlideMenu>
  )
}

export default Menu
