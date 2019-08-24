import React, { useState } from 'react';
import './resources/index.css';

import Query from './components/Query';
import About from './components/About';
import Loading from './components/Loading';
import Footer from './components/Footer';

import Summary from './components/Summary';

export default function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const makeAPICall = (summName) => {
    setHasSearched(true);
    setIsLoading(true);

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
        setIsLoading(false);
      })
      .catch(err => {
        // TODO: real error handling
        alert(`Error: ${err}`);
      });
  };

  /*
   * Initializing what content to display based on the state of the app
   * (has the user submitted the form, are we waiting for Promises to be
   * resolved, etc.)
   */
  let content = null;

  if (!hasSearched) {
    content = <About />;
  } else if (isLoading) {
    content = <Loading />;
  } else {
    content = (
      <div>
        <Summary
          numMatches={ data.numMatches }
          summName={ data.playerStats.summName }
          wins={ data.playerStats.wins }
          cs={ data.playerStats.cs }
          friend1SummName={ data.friend1Stats.summName }
          friend1Count={ data.friend1Stats.count }
          friend1Wins={ data.friend1Stats.wins }
          friend1CS={ data.friend1Stats.cs }
          friend2SummName={ data.friend2Stats.summName }
          friend2Count={ data.friend2Stats.count }
          friend2Wins={ data.friend2Stats.wins }
          friend2CS={ data.friend2Stats.cs }
          friend3SummName={ data.friend3Stats.summName }
          friend3Count={ data.friend3Stats.count }
          friend3Wins={ data.friend3Stats.wins }
          friend3CS={ data.friend3Stats.cs }
        />
      </div>
    );
  }

  return (
    <div>

      <div className="container">
        <Query onSubmit={ makeAPICall } />
        { content }
      </div>
      <Footer />

    </div>
  );
}
