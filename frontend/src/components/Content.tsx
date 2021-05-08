import React from 'react';
import VerticalNav from './VerticalNav';
import './Content.scss';
import Journey from './Journey';

const Content: React.FC = () => {
  return (
    <div className="Content">
      <VerticalNav />
      <Journey></Journey>
    </div>
  );
};

export default Content;
