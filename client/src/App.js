import React, { useState } from 'react';
import './resources/index.css';

import Query from './components/Query';
import About from './components/About';
import Loading from './components/Loading';
import Footer from './components/Footer';

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
  } else if (isLoading || !isLoading) {
    content = <Loading />;
  } else {
    content = ( <p>{ JSON.stringify(data) }</p> );
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
