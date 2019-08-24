import React from 'react';
import { Bar } from 'react-chartjs-2'
import '../../resources/index.css';

// findAverage computes the average of all the items in the provided list
function findAverage(list) {
  const sum = list.reduce((a, b) => a + b, 0);
  const average = sum / list.length;

  return Math.round(average);
}

// findTimeOrder determines whether the player has the first, second, third, or
// fourth longest game times, on average
function findTimeOrder(playerTime, listOfAllTimes) {
  const suffixes = ['st', 'nd', 'rd', 'th'];

  let sortedTimes = Array.from(listOfAllTimes);
  sortedTimes.sort((a, b) => a - b);

  const playerIndex = sortedTimes.indexOf(playerTime);

  return (playerIndex + 1) + suffixes[playerIndex];
}

// Formats the provided time in a more readable "minutes:seconds" format.
//
// The provided time should be a number of seconds.
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.round(time % 60);

  // Turns something like: "10:1" into a more readable: "10:01"
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return minutes + ':' + seconds;
}

export default function GameTimes(props) {
  const averageTimes = [
    findAverage(props.times),
    findAverage(props.friend1Times),
    findAverage(props.friend2Times),
    findAverage(props.friend3Times)
  ];

  // Prep info for game times bar chart
  const gameTimesChartData = {
    labels: [
      'You',
      props.friend1SummName,
      props.friend2SummName,
      props.friend3SummName
    ],
    datasets: [{
      data: averageTimes,
      backgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      hoverBackgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      borderWidth: 0
    }]
  };
  const gameTimesChartOptions = {
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
          // Round to the nearest multiple of 30
          min: Math.round( (Math.min(...averageTimes) - 30) / 30.0 ) * 30,
          max: Math.round( (Math.max(...averageTimes) + 30) / 30.0 ) * 30,
          stepSize: 30,
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
      <h2>Game Durations</h2>
      <div>
        <Bar data={ gameTimesChartData } options={ gameTimesChartOptions } />
      </div>
      <h4>
        <span className="hilite">{ findTimeOrder(averageTimes[0], averageTimes) }</span> in Shortest Games
      </h4>
      <p>Your average game duration: <span className="hilite">{ formatTime(averageTimes[0]) }</span></p>
    </div>
  );
}
