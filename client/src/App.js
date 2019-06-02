import React, { useState } from 'react';
import './index.css';

import Query from './components/Query';
import About from './components/About';

function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [data, setData] = useState({ "default": "testing" });

  const makeAPICall = (summName) => {
    fetch(`/summoner?name=${summName}`)
      .then(res => {
        // If the response code is 200
        if (res.ok) {
          return res.json();
        } else {
          // TODO: real error handling
          alert(`Error code ${res.status}`);
        }
      })
      .then(resJson => {
        setData(resJson);
        setHasSearched(true);
      })
      .catch(err => {
        // TODO: real error handling
        alert(`Error: ${err}`);
      });
  };

  // Initializing what content to display based on the state of the app
  let content = null;
  if (!hasSearched) {
    content = <About />;
  } else {
    content = ( <p>{ JSON.stringify(data) }</p> );
  }

  return (
    <div>

      <div className="container">
        <Query onSubmit={ makeAPICall } />
        { content }
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
