import React from 'react';
import SocialIcons from './SocialIcons';
import profile from '../images/profile-picture-no-bg.png';

const AboutMe = ({ bio, networks }) => {
  return (
    <div className="about-me my-5">
      <img src={profile} alt="Profile" className="img-responsive" />
      <div className="block-content">
        <h2 id="about">About Me</h2>

        <p>{bio}</p>
        <div className="justify-content-md-center">
          <SocialIcons networks={networks} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
