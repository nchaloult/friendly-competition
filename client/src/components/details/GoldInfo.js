import React from 'react';
import { Bar } from 'react-chartjs-2'
import '../../resources/index.css';

// findAverage computes the average of all the items in the provided list
function findAverage(list) {
  const sum = list.reduce((a, b) => a + b, 0);
  const average = sum / list.length;

  return Math.round(average);
}

// findGoldOrder determines whether the player has the first, second, third,
// or fourth most gold spent vs. earned, on average
function findGoldOrder(playerGoldRatio, listOfAllGoldRatios) {
  const suffixes = ['st', 'nd', 'rd', 'th'];

  let sortedGoldRatios = Array.from(listOfAllGoldRatios);
  sortedGoldRatios.sort((a, b) => b - a);

  const playerIndex = sortedGoldRatios.indexOf(playerGoldRatio);

  return (playerIndex + 1) + suffixes[playerIndex];
}

export default function GoldInfo(props) {
  const averageGoldRatios = [
    ( findAverage(props.spent) / findAverage(props.earned) * 100 ).toFixed(2),
    ( findAverage(props.friend1Spent) / findAverage(props.friend1Earned) * 100 ).toFixed(2),
    ( findAverage(props.friend2Spent) / findAverage(props.friend2Earned) * 100 ).toFixed(2),
    ( findAverage(props.friend3Spent) / findAverage(props.friend3Earned) * 100 ).toFixed(2)
  ];

  // Prep info for gold info bar chart
  const goldChartData = {
    labels: [
      'You',
      props.friend1SummName,
      props.friend2SummName,
      props.friend3SummName
    ],
    datasets: [{
      data: averageGoldRatios,
      backgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      hoverBackgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      borderWidth: 0
    }]
  };
  const goldChartOptions = {
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
          min: Math.floor( Math.min(...averageGoldRatios) ) - 1,
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
      <h2>Gold Spent vs. Earned</h2>
      <div>
        <Bar data={ goldChartData } options={ goldChartOptions } />
      </div>
      <h4>
        <span className="hilite">{ findGoldOrder(averageGoldRatios[0], averageGoldRatios) }</span> in Gold Utilization
      </h4>
      <p>You spent <span className="hilite">{ averageGoldRatios[0] }%</span> of the gold you earned, on average</p>
    </div>
  );
}
