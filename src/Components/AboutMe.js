import React from 'react';
import SocialIcon from './SocialIcon';
import profile from '../images/profile-picture-no-bg.png';
import Spinner from './Spinner';

const AboutMe = ({ bio, networks }) => {
  const renderSocialIcons = networks => {
    if (!networks) {
      return <Spinner />;
    }
    return (
      <div className="social-section">
        {networks.map(network => (
          <SocialIcon network={network} key={network.id} size="lg" />
        ))}
      </div>
    );
  };
  return (
    <div className="container">
      <div className="about-me my-5">
        <img src={profile} alt="Profile" className="profile-picture" />
        {/* <div className="profile-picture" /> */}
        <div className="block-content">
          <h2 id="about">About Me</h2>

          <p>{bio}</p>
          <div className="justify-content-md-center">
            {renderSocialIcons(networks)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
