import React, { useState } from 'react';
import '../resources/index.css';

export default function Query(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
     * TODO: Perform more input sanitizations (look for characters that Riot
     * doesn't allow in summoner names, etc.)
     */
    // Sanitize input
    props.onSubmit(input.trim().toLowerCase());

    // Clear input box contents
    setInput('');
  };

  return (
    <div className="myCard">
      <div className="row">
        <div className="col">
          <h1>Friendly Competition</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={ event => { handleSubmit(event) } }>
            <input
              type="text"
              onChange={ event => setInput(event.target.value) }
              placeholder="Summoner name"
            />
            <input type="submit" value="Go" />
          </form>
        </div>
      </div>
    </div>
  );
}
