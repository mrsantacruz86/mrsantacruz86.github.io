import React, { Component } from 'react';
import SocialSection from './SocialSection';

const socialNetworks = [
  {
    id: 1,
    name: 'Email',
    icon: 'envelope',
    link: 'mailto:abnerdc86@gmail.com'
  },
  {
    id: 2,
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/mrsantacruz86'
  },
  {
    id: 3,
    name: 'Linked In',
    icon: 'linkedin-in',
    link: 'https://www.linkedin.com/in/nelson-diaz-a33073154/'
  }
  // {
  //   id: 4,
  //   name: "Stack Overflow",
  //   icon: "stack-overflow",
  //   link: "https://stackoverflow.com/users/6732042/mrsantacruz86?tab=profile"
  // }
];

class SideSection extends Component {
  render() {
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
            "Web Engineer with versatile experience in Front and Back-end Technologies, committed to
            integrate functionality and beauty as essential parts of my work."
          </p>

          <hr />

          {/* <a href="mailto:abnerdc86@gmail.com">
            <p>
              <i className="fas fa-envelope"></i> abnerdc86@gmail.com
            </p>
          </a>

          <a href="https://mrsantacruz86.github.io/" target="_blank" rel="noopener noreferrer">
            <p>
              <i className="fas fa-globe-americas"></i> https://mrsantacruz86.github.io
            </p>
          </a> */}

          <div className="justify-content-md-center">
            <SocialSection networks={socialNetworks} />
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default SideSection;
