import React, { useState } from 'react';
import '../resources/index.css';

export default function Query(props) {
  const [input, setInput] = useState('');
  const [warning, setWarning] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
     * TODO: Perform more input sanitizations (look for characters that Riot
     * doesn't allow in summoner names, etc.)
     */
    // Sanitize input
    const trimmedInput = input.trim().toLowerCase();

    if (trimmedInput === '') {
      setWarning('Summoner name can\'t be blank.');
    } else {
      setWarning('');

      props.onSubmit(trimmedInput);
    }

    // Clear input box contents after pressing "Go"
    setInput('');
  };

  // Initializing what warning content to display, if any, based on user input
  let warningContent = null;

  if (warning !== '') {
    warningContent = (
      <div style={{ 'textAlign': 'center', 'marginTop': '0.5rem' }}>
        <p style={{ 'margin': '0', 'color': '#e53935' }}>{ warning }</p>
      </div>
    );
  }

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
      <div className="row">
        <div className="col">
          { warningContent }
        </div>
      </div>
    </div>
  );
}
