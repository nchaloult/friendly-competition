import React from 'react';
import './index.css';

import Query from './components/Query';
import About from './components/About';

function App() {
  return (
    <div>

      <div className="container">
        <Query />
        <About />
      </div>
      <footer>
        <div className="container">
          <p><em>
            Friendly Competition compares a League of Legends player's recent in-game performance with that of their friends.
          </em></p>
          <p>Built by <a href="https://github.com/nchaloult">Nick Chaloult</a> in 2019</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
