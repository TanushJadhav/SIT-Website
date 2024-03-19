import React from 'react';
import '../Assets/css/Home.css';
import sit_img from '../Assets/images/SIT.jpg';

function Home() {
  return (
    <div className='container'>
      <div className='left-side'>
        <img src={sit_img} alt="SIT" />
      </div>

      <div className='right-side'>
        <h6>Vision</h6>
        <h6>Mission</h6>
      </div>
    </div>
  );
}

export default Home;
