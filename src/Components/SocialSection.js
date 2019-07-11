import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaLink from './MediaLink';

class SocialSection extends Component {
  render() {
    const { networks } = this.props;
    console.log(JSON.stringify(networks));
    return (
      <div className="social-section">
        {networks.map(item => (
          <MediaLink network={item} size="3x" />
        ))}
      </div>
    );
  }
}
SocialSection.propTypes = {
  networks: PropTypes.object.isRequired
};

export default SocialSection;
