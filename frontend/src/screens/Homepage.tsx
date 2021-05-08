import React from 'react';
import Footer from '../components/Footer';
import Additional from '../components/Additional';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

const Homepage = () => {
  return (
    <div className="Homepage">
      <Navigation />
      <Content />
      <Additional />
      <Footer />
    </div>
  );
};
export default Homepage;
