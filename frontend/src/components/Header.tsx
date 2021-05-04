import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import VerticalNav from './VerticalNav';
import './Header.scss';

const Header = () => {
  return (
    <>
      <Navigation />
      <div className="Header">
        <VerticalNav />
        <Jumbotron className="Header__jumbo">
          <h1>Hello, world!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dicta odit dolorem quia repellendus veritatis tempora sequi ab natus
            perspiciatis.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    </>
  );
};

export default Header;
