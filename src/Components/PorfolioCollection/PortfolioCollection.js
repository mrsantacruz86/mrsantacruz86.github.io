import React, { Component } from 'react';
import './PortfolioCollection.css';
import PortfolioItem from '../PorfolioItem';


class NavLink extends Component {

  render() {
    const coll = this.props.collection;
    return (
      <div className="portfolio-collection row">
        { coll.map(item =>
          <PortfolioItem project={item} key={item.id}/>
        )}

      </div>
    );
  }
}

export default NavLink;
