import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = ({ network, size }) => {
  return (
    <a
      className="social-icon mx-1"
      href={network.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`${network.faIcon} fa-${size}`} />
    </a>
  );
};

SocialIcon.propTypes = {
  network: PropTypes.object.isRequired
};

export default SocialIcon;
