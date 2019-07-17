import React from "react";

const AboutMe = ({ bio }) => {
  return (
    <div>
      <h2 id="about">About Me</h2>
      <hr />
      <p>{bio}</p>
    </div>
  );
};

export default AboutMe;
