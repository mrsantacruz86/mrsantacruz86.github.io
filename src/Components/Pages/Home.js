import React, { useState } from 'react';
import SkillList from '../SkillList';
import about from '../../bio-data.json';

const Home = props => {
  const [data, setdata] = useState(about);

  return (
    <div className="page-content">
      <h1>ABOUT ME</h1>
      <hr />
      <p>{data.bio}</p>
      <SkillList skills={data.skills} />
    </div>
  );
};

export default Home;
