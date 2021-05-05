import React from 'react';
import Navigation from './Navigation';
import VerticalNav from './VerticalNav';
import './Header.scss';
import Journey from './Journey';

const Header = () => {
  return (
    <>
      <Navigation />
      <div className="Header">
        <VerticalNav />
        <Journey />
      </div>
    </>
  );
};

export default Header;
