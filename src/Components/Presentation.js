import React from "react";
import SocialIcons from "./SocialIcons";

const Presentation = props => {
  return (
    <div className="card personal-info border-0">
      <div className="card-body">
        <img
          src="assets/images/profile-picture-480x480-web.png"
          alt="Profile"
          className="rounded-circle img-responsive profile-picture"
        />
        <h1>Nelson Diaz</h1>
        <hr />
        <p className="font-italic">
          "Web Engineer with versatile experience in Front and Back-end
          Technologies, committed to integrate functionality and beauty as
          essential parts of my work."
        </p>

        <hr />

        <div className="justify-content-md-center">
          <SocialIcons networks={props.networks} />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Presentation;
