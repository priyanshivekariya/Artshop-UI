import React from 'react';
import './About.css';
import Header from './Header'; // Ensure this is imported only once

const About = () => {
  return (
    <>
      <div className="about-page">
        <h1 className='text'>About Our Art Gallery</h1>
        <p>
          Welcome to our art gallery, where creativity meets beauty! We are
          passionate about art and committed to showcasing the finest pieces from
          talented artists around the world.
        </p>
        <p>
          Explore our diverse collection of paintings, sculptures, and
          installations. Whether you're an art enthusiast or just curious, there's
          something here for everyone.
        </p>
        <p>
          Visit us today to experience the magic of art in person, or browse our
          online gallery to discover new masterpieces.
        </p>
        <p>
          An art gallery is a room or a building in which visual art is displayed. In Western cultures from the mid-15th century, a gallery was any long, narrow covered passage along a wall, first used in the sense of a place for art in the 1590s.
        </p>
        <p>
          The long gallery in Elizabethan and Jacobean houses served many purposes including the display of art. Historically, art is displayed as evidence of status and wealth, and for religious art as objects of ritual or the depiction of narratives.
          The first galleries were in the palaces of the aristocracy or in churches. As art collections grew, buildings became dedicated to art, becoming the first art museums.
        </p>
      </div>
    </>
  );
};

export default About;
