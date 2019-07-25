import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = ({ network, size }) => {
  return (
    <a href={network.link} target="_blank" rel="noopener noreferrer">
      <i className={`${network.faIcon} fa-${size}`} />
    </a>
  );
};

SocialIcon.propTypes = {
  network: PropTypes.array.isRequired
};

export default SocialIcon;
