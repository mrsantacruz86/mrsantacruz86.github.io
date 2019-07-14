import React, { useState } from 'react';
import about from '../../bio-data.json';

const Home = props => {
  const [data, setdata] = useState(about);

  return (
    <div className="page-content">
      <h1>ABOUT ME</h1>
      <hr />
      <p>{data.bio}</p>
    </div>
  );
};

export default Home;
