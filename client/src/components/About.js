import React from 'react';
import '../index.css';

function About() {
  return (
    <div className="myCard" style={{ 'display': 'flex', 'justifyContent': 'center' }}>
      <div style={{ 'width': '70%' }}>
        <h2>What Is It?</h2>
        <p>
          Friendly Competition is different than services like OP.GG. Instead of
          only displaying stats from <em>your</em> recent League games, it shows
          how you stack up against <em>people that you play with.</em>
        </p>
        <h2>How It Works</h2>
        <p>
          Friendly Competition looks at your 10 most recent games (whether
          they are ranked, normals, ARAM, or anything else) and compares
          your performance to 3 other players who appear the most often in
          those games.
        </p>
      </div>
    </div>
  );
}

export default About;
