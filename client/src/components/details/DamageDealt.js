import React from 'react';
import { Bar } from 'react-chartjs-2'
import '../../resources/index.css';

// findAverage computes the average of all the items in the provided list
function findAverage(list) {
  const sum = list.reduce((a, b) => a + b, 0);
  const average = sum / list.length;

  return Math.round(average);
}

// findDamageOrder determines whether the player has the first, second, third,
// or fourth most damage dealt to enemy champions, on average
function findDamageOrder(playerDamage, listOfAllDamages) {
  const suffixes = ['st', 'nd', 'rd', 'th'];

  let sortedDamages = Array.from(listOfAllDamages);
  sortedDamages.sort((a, b) => b - a);

  const playerIndex = sortedDamages.indexOf(playerDamage);

  return (playerIndex + 1) + suffixes[playerIndex];
}

export default function DamageDealt(props) {
  const averageDamages = [
    findAverage(props.damage),
    findAverage(props.friend1Damage),
    findAverage(props.friend2Damage),
    findAverage(props.friend3Damage)
  ];

  // Prep info for damage dealt bar chart
  const damageChartData = {
    labels: [
      'You',
      props.friend1SummName,
      props.friend2SummName,
      props.friend3SummName
    ],
    datasets: [{
      data: averageDamages,
      backgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      hoverBackgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      borderWidth: 0
    }]
  };
  const damageChartOptions = {
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
          // Round to the nearest multiple of 2000
          min: Math.round( (Math.min(...averageDamages) - 2000) / 2000.0 ) * 2000,
          max: Math.round( (Math.max(...averageDamages) + 2000) / 2000.0 ) * 2000,
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
      <h2>Damage Dealt to Champs</h2>
      <div>
        <Bar data={ damageChartData } options={ damageChartOptions } />
      </div>
      <h4>
        <span className="hilite">{ findDamageOrder(averageDamages[0], averageDamages) }</span> in Most Damage Dealt
      </h4>
      <p>Your average damage dealt to enemy champions: <span className="hilite">{ averageDamages[0] }</span></p>
    </div>
  );
}
