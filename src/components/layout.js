import React from 'react'
import '../styles/main.scss'
import Navbar from './navbar'
import Footer from './footer'
import Menu from './menu'


const Layout = ({ children }) => (
  <main>
    <Menu />
    <Navbar />
    {children}
    <Footer />
  </main>
)

export default Layout
