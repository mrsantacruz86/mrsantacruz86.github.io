import React, { Component } from 'react';

class MediaLink extends Component {
  render() {
    const network = this.props.network;
    return (
      <div className="media-link" key={network.id}>
        <div>
          <a href={network.link} target="_blank">
            <i className={`fab fa-${network.icon} fa-${this.props.size}`} />
          </a>
        </div>
      </div>
    );
  }
}

export default MediaLink;
