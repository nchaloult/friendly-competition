import React, { useState } from 'react';
import '../index.css';

function Query(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Sanitize input
    props.onSubmit(input.trim().toLowerCase());

    // Clear text box contents
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
              value={ input }
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

export default Query;
