import React, { useState } from 'react';
import '../resources/index.css';

// escapeRegExp escapes potentially dangerous characters.
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default function Query(props) {
  const [input, setInput] = useState('');
  const [warning, setWarning] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Sanitize input
    const sanitizedInput = escapeRegExp(input.trim().toLowerCase());

    if (sanitizedInput === '') {
      setWarning('Summoner name can\'t be blank.');
    } else if (sanitizedInput.length < 3 || sanitizedInput.length > 16) {
      setWarning('Valid summoner names are between 3 and 16 characters.');
    } else {
      // All clear
      setWarning('');
      props.onSubmit(sanitizedInput);
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
