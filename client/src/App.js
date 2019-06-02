import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

import Query from './components/Query';
import About from './components/About';

function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [summName, setSummName] = useState('tonyl');
  const [data, setData] = useState({});

  useEffect(() => {
    alert(`About to make the API call for ${summName}`);
    axios.get(`/summoner?name=${summName}`)
      .then(res => {
        setHasSearched(true);
        setData(res);
      })
      .catch(err => {
        // TODO: real error handling
        console.log(err);
      });
  }, [summName]);

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
        <Query onSubmit={ setSummName } />
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
