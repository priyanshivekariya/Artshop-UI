import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
        src="https://img.freepik.com/free-vector/watercolor-world-art-day-background_23-2149327049.jpg"
        alt="Art Gallery Background"
        className="back_img"
      />
      <div className="banner">
        <p>Welcome to ART Gallery</p>
        <h1>BEST HANDPICKED ARTS ARE AWAITING YOU</h1>
      </div>
    </div>
  );
}

export default Home;
