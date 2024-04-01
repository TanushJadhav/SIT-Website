import React from 'react';
import '../Assets/css/Home.css';
import sit_img from '../Assets/images/SIT.jpg';

function Home() {
  return (
    <div className='container'>
      <div class="split left">
        <img src={sit_img} alt="SIT" />
      </div>

      <div className="split right">
        <div class="centered">
          <h2>Vision</h2>
          <ul>
            <li><p>Promoting International understanding through quality education.</p></li>
          </ul>
          <h2>Mission</h2>
          <ul>
            <li><p>To inculcate spirit of 'Vasudhaiva Kutumbakam' (the world is one family).</p></li>
            <li><p>To contribute towards knowledge generation and dissemination.</p></li>
            <li><p>To promote ethical and value-based learning.</p></li>
            <li><p>To foster the spirit of national development.</p></li>
            <li><p>To inculcate cross cultural sensitization.</p></li>
            <li><p>To develop global competencies amongst students.</p></li>
            <li><p>To nurture creativity and encourage entrepreneurship.</p></li>
            <li><p>To enhance employability and contribute to human resource development.</p></li>
            <li><p>To promote health and wellness amongst students, staff & community.</p></li>
            <li><p>To instill sensitivity amongst the youth towards the community and environment.</p></li>
            <li><p>To produce thought provoking leaders for the society.</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

