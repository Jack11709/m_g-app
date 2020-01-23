import React from 'react';

import './style.scss';
import Navbar from './navbar.js'
import Footer from './footer'

const Layout = ({ children }) => (
	<>
    <Navbar />\
      {children}
    <Footer />
	</>
);

export default Layout;
