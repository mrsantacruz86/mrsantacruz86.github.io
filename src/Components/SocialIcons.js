import React from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const SocialIcon = ({ network }) => {
  return (
    <a href={network.link} target="_blank" rel="noopener noreferrer">
      <i className={`${network.faIcon} fa-2x`} />
    </a>
  );
};

const SocialIcons = ({ networks }) => {
  if (!networks) {
    return <Spinner />;
  }
  return (
    <div className="social-section">
      {networks.map(network => (
        <div className="media-link" key={network.id}>
          <SocialIcon network={network} />
        </div>
      ))}
    </div>
  );
};
SocialIcons.propTypes = {
  networks: PropTypes.array.isRequired
};

export default SocialIcons;
