import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Nav from '../components/nav/Nav';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <Nav />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  