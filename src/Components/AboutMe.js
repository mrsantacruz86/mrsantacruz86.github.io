import React from 'react';
import SocialIcon from './SocialIcon';
import profile from '../images/profile-picture-gradient.png';
import Spinner from './Spinner';

const AboutMe = ({ bio, networks }) => {
  const renderSocialIcons = networks => {
    if (!networks) {
      return <Spinner />;
    }
    return (
      <div className="social-section text-center">
        {networks.map(network => (
          <SocialIcon network={network} key={network.id} size="lg" />
        ))}
      </div>
    );
  };
  return (
    <div className="container">
      <div className="about-me my-5">
        {/* <img src={profile} alt="Profile" className="profile-picture" /> */}
        <div className="profile-picture" />
        <div className="block-content text-center">
          <h1 className="display-4">About Me</h1>

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
