import React from 'react';
import { Pie } from 'react-chartjs-2'
import '../resources/index.css';

export default function Wins(props) {
  // Sort each player's wins in reverse numerical order
  let orderedWins = [];

  orderedWins.push(props.wins + " / " + props.numMatches + " - You");
  orderedWins.push(props.friend1Wins + " / " + props.numMatches + " - " + props.friend1SummName);
  orderedWins.push(props.friend2Wins + " / " + props.numMatches + " - " + props.friend2SummName);
  orderedWins.push(props.friend3Wins + " / " + props.numMatches + " - " + props.friend3SummName);

  orderedWins.sort((a, b) => parseInt(b.charAt(0)) - parseInt(a.charAt(0)));

  // Prep info for wins pie chart
  const winChartData = {
    labels: [ 'Wins', 'Losses' ],
    datasets: [{
      data: [props.wins, props.numMatches - props.wins],
      backgroundColor: ['#b3c3d3', '#414959'],
      hoverBackgroundColor: ['#b3c3d3', '#414959'],
      borderWidth: 0
    }]
  };
  const winChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  };

  return (
    <div>
      <h2>Wins</h2>
      <Pie data={ winChartData } options={ winChartOptions } />
      <ol>
      {
        orderedWins.map(entry => {
          // Highlight the searched summoner's wins in the list
          if (entry.slice(-3) === "You") {
            return <li className="hilite">{ entry }</li>;
          }

          return <li>{ entry }</li>;
        })
      }
      </ol>
    </div>
  );
}
