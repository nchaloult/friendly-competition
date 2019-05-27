import React from 'react';
import '../index.css';

function Query() {
  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <h1>Friendly Competition</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <input type="text" placeholder="Summoner name" />
            <input type="submit" value="Go" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Query;
