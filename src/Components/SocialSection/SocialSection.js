import React, { Component } from 'react';
import './SocialSection.css';
import MediaLink from '../MeliaLink'


class SocialSection extends Component {
  render() {
    const networks = this.props.networks;
    return (
      <div className="social-section">
        {networks.map(item => <MediaLink network={item} size="3x" />)}
      </div>
    );
  }
}

export default SocialSection;
