import React from 'react';
import SocialIcons from './SocialIcons';

const profile = './assets/images/profile-picture-480x480-web.png';

const AboutMe = ({ bio, networks }) => {
  return (
    <div
      className="about-me my-5"
      style={{
        backgroundImage: `url(${profile}) linear-gradient(to left, black, white )`
      }}
    >
      {/* <img
        src="assets/images/profile-picture-480x480-web.png"
        alt="Profile"
        className="img-responsive profile-picture"
      /> */}
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
