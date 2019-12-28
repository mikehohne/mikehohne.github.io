import React from 'react';
import PortfolioList from './components/PortfolioList';

export const Portfolio = props => {
  return (
    <React.Fragment>
      <h3 style={{ textAlign: 'center' }}>Projects</h3>
      <PortfolioList {...props} />
    </React.Fragment>
  );
};
