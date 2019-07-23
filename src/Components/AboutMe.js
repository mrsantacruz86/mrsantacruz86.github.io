import React from "react";
import SocialIcons from "./SocialIcons";

const AboutMe = ({ bio, networks }) => {
  return (
    <div className="personal-info">
      <img
        src="assets/images/profile-picture-480x480-web.png"
        alt="Profile"
        className="rounded-circle img-responsive profile-picture"
      />
      <p className="font-italic">
        "Web Engineer with versatile experience in Front and Back-end
        Technologies, committed to integrate functionality and beauty as
        essential parts of my work."
      </p>

      <hr />

      <div className="justify-content-md-center">
        <SocialIcons networks={networks} />
      </div>
      <hr />
      <h2 id="about">About Me</h2>
      <hr />
      <p>{bio}</p>
    </div>
  );
};

export default AboutMe;
