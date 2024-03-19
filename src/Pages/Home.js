import React from 'react';
import '../Assets/css/Home.css';
import sit_img from '../Assets/images/SIT.jpg';

function Home() {
  return (
    <div className='container'>
      <div class="split left">
        <img src={sit_img} alt="SIT" />
      </div>

      <div class="split right">
        <div class="centered">
          <h2>Vision</h2>
          <p>Promoting International understanding through quality education.</p>
          <h2>Mission</h2>
          <ul>
            <li><p>To contribute towards knowledge generation and dissemination.</p></li>
            <li><p>To promote ethical and value-based learning.</p></li>
            <li><p>To foster the spirit of national development.</p></li>
            <li><p>To inculcate cross cultural sensitization.</p></li>
            <li><p>To develop global competencies amongst students.</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

