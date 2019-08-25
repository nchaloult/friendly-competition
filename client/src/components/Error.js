import React from 'react';
import '../resources/index.css';

const statusMessages = {
  400: 'That name isn\'t a valid summoner name.',
  403: 'Riot\'s API isn\'t letting requests come in from Friendly Competition. Contact Nick and tell him to update the API key.',
  404: 'An account with that summoner named couldn\'t be found.',
  429: 'Riot\'s API has received too many requests from Friendly Competition. Wait about a minute before pressing "Go" again.',
  500: 'Internal server error. This is our fault, not yours.'
};

const unamusedEmoji = String.fromCodePoint(parseInt('1F612', 16));

export default function Error(props) {
  return (
    <div className="myCard">
      <div className="row">
        <div className="col" style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
          <p style={{ 'fontSize': '5em', 'align': 'center' }}>
            { unamusedEmoji }
          </p>
        </div>
        <div className="col-9">
          <h2>Encountered an Error</h2>
          <p className="hilite">
            { props.statusCode + ': ' + statusMessages[props.statusCode] }
          </p>
        </div>
      </div>
    </div>
  );
}
