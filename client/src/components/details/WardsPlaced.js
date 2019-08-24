import React from 'react';
import { Bar } from 'react-chartjs-2'
import '../../resources/index.css';

// findAverage computes the average of all the items in the provided list
function findAverage(list) {
  const sum = list.reduce((a, b) => a + b, 0);
  const average = sum / list.length;

  return Math.round(average);
}

// findWardOrder determines whether the player has the first, second, third,
// or fourth most wards placed, on average
function findWardOrder(playerWards, listOfAllWards) {
  const suffixes = ['st', 'nd', 'rd', 'th'];

  let sortedWards = Array.from(listOfAllWards);
  sortedWards.sort((a, b) => b - a);

  const playerIndex = sortedWards.indexOf(playerWards);

  return (playerIndex + 1) + suffixes[playerIndex];
}

export default function WardsPlaced(props) {
  const averageWardsPlaced = [
    findAverage(props.wardsPlaced),
    findAverage(props.friend1WardsPlaced),
    findAverage(props.friend2WardsPlaced),
    findAverage(props.friend3WardsPlaced)
  ];

  // Prep info for wards placed bar chart
  const wardsChartData = {
    labels: [
      'You',
      props.friend1SummName,
      props.friend2SummName,
      props.friend3SummName
    ],
    datasets: [{
      data: averageWardsPlaced,
      backgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      hoverBackgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      borderWidth: 0
    }]
  };
  const wardsChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: "#b3c3d3"
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          // Make sure everyone's bar pokes through a little and shows
          min: Math.min(...averageWardsPlaced) - 1,
          fontColor: "#b3c3d3"
        },
        gridLines: {
          display: false
        }
      }]
    }
  };

  return (
    <div className="myCard">
      <h2>Wards Placed</h2>
      <div>
        <Bar data={ wardsChartData } options={ wardsChartOptions } />
      </div>
      <h4>
        <span className="hilite">{ findWardOrder(averageWardsPlaced[0], averageWardsPlaced) }</span> in Most Wards Placed
      </h4>
      <p>Your average wards placed: <span className="hilite">{ averageWardsPlaced[0] }</span></p>
    </div>
  );
}
