import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import '../resources/index.css';

// calculateKDA finds the KDA of one player for one game
function calculateKDA(kills, deaths, assists) {
  // Can't divide by zero. If a perfect game was played, insert arbitrary death
  if (deaths === 0) {
    deaths = 1;
  }

  const kda = (kills + assists) / deaths;

  return Math.round(kda * 100) / 100;
}

// getOverallAverageKDA finds the average KDA of one player over all game analyzed
function getOverallAverageKDA(killsList, deathsList, assistsList) {
  let kdas = [];

  //Populating KDAs (assuming that each list is the same length)
  for (let i = 0; i < killsList.length; i++) {
    kdas.push(calculateKDA(killsList[i], deathsList[i], assistsList[i]));
  }

  const sum = kdas.reduce((a, b) => a + b, 0);
  const average = sum / kdas.length;

  return Math.round(average * 100) / 100;
}

export default function KDA(props) {
  // Prep info for KDA bar chart
  let averageKDAs = [];

  averageKDAs.push( getOverallAverageKDA(props.kills, props.deaths, props.assists) );
  averageKDAs.push( getOverallAverageKDA(props.friend1Kills, props.friend1Deaths, props.friend1Assists) );
  averageKDAs.push( getOverallAverageKDA(props.friend2Kills, props.friend2Deaths, props.friend2Assists) );
  averageKDAs.push( getOverallAverageKDA(props.friend3Kills, props.friend3Deaths, props.friend3Assists) );

  const kdaChartData = {
    labels: [
      'You',
      props.friend1SummName,
      props.friend2SummName,
      props.friend3SummName
    ],
    datasets: [{
      data: averageKDAs,
      backgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      hoverBackgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      borderWidth: 0
    }]
  };
  const kdaChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 0.5,
          fontColor: "#b3c3d3"
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: "#b3c3d3"
        },
        gridLines: {
          display: false
        }
      }]
    }
  };

  // HorizontalBar component must be in its own div for auto-resizing to behave
  return (
    <div>
      <h2>Average KDA per Game</h2>
      <div>
        <HorizontalBar data={ kdaChartData } options={ kdaChartOptions } />
      </div>
    </div>
  );
}
