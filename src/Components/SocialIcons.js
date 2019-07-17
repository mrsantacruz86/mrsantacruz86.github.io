import React from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

const SocialIcon = props => {
  console.log(props.network);
  return (
    <div>
      <a href={props.network.link} target="_blank" rel="noopener noreferrer">
        <i className={`${props.network.faIcon} fa-3x`} />
      </a>
    </div>
  );
};

const SocialIcons = ({ networks }) => {
  // console.log(networks);
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
