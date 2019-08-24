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

  // Initialize wins pie chart
  const WinChart = require('react-chartjs').Pie;
  const winChartData = [
    {
      value: props.wins,
      color: '#b3c3d3',
      highlight: '#b3c3d3',
      label: 'Wins'
    },
    {
      value: props.numMatches - props.wins,
      color: '#414959',
      highlight: '#414959',
      label: 'Losses'
    }
  ];
  const winChartOptions = {
    segmentShowStroke: false
  };

  return (
    <div>
      <div className="row" style={{ "display": "flex", "justifyContent": "center" }}>
        <WinChart style={{ 'margin': '0.5rem 0rem' }} data={ winChartData } options={ winChartOptions } width="200" height="200" />
      </div>
      <div className="row" style={{ "textAlign": "center" }}>
        <div className="col">
          <h3>{ props.wins } / { props.numMatches } Wins</h3>
        </div>
      </div>
      <div className="row">
        <ul>
        {
          orderedWins.map(entry => {
            if (entry.slice(-3) === "You") {
              return <li className="hilite">{ entry }</li>;
            }

            return <li>{ entry }</li>;
          })
        }
        </ul>
      </div>
    </div>
  );
}
