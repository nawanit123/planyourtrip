import React from 'react';
import VerticalNav from './VerticalNav';
import './Content.scss';
import Journey from './Journey';
import JourneyEntry from './JourneyEntry';

const Content: React.FC = () => {
  return (
    <div className="Content">
      <VerticalNav />
      <Journey>
        <br />
        <JourneyEntry />
        <JourneyEntry />
      </Journey>
    </div>
  );
};

export default Content;
