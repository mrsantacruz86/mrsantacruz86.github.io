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
      <div className="about-me my-5" id="about">
        <div className="row">
          <div className="col-md-4">
            <img src={profile} alt="Profile" className="img-fluid profile-picture" />
          </div>
          <div className="col-md-8">
            <div className="block-content">
              <h1 className="display-4">About Me</h1>
              <p>{bio}</p>
              <p className="justify-content-center">{renderSocialIcons(networks)}</p>
            </div>
          </div>
        </div>
        {/* <div className="profile-picture" /> */}
      </div>
    </div>
  );
};

export default AboutMe;
