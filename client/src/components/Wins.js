import React from 'react';
import '../resources/index.css';

export default function Wins(props) {
  // Sort each player's wins in reverse numerical order
  let orderedWins = [];

  orderedWins.push(props.wins + " / " + props.numMatches + " - You");
  orderedWins.push(props.friend1Wins + " / " + props.numMatches + " - " + props.friend1SummName);
  orderedWins.push(props.friend2Wins + " / " + props.numMatches + " - " + props.friend2SummName);
  orderedWins.push(props.friend3Wins + " / " + props.numMatches + " - " + props.friend3SummName);

  orderedWins.sort((a, b) => parseInt(b.charAt(0)) - parseInt(a.charAt(0)));

  return (
    <div>
      <div className="row" style={{ "display": "flex", "justifyContent": "center" }}>
        <div style={{ "background": "#fdce03", "margin": "1rem 0rem", "width": "16vw", "height": "16vw", "borderRadius": "100%" }}>&nbsp;</div>
      </div>
      <div className="row" style={{ "textAlign": "center" }}>
        <h3>{ props.wins } / { props.numMatches } Wins</h3>
      </div>
      <div className="row">
        <ul>
        { orderedWins.map(entry => (<li>{ entry }</li>)) }
        </ul>
      </div>
    </div>
  );
}
