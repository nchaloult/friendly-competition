import React from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import '../../resources/index.css';

// findAverage computes the average of all the items in the provided list
function findAverage(list) {
  const sum = list.reduce((a, b) => a + b, 0);
  const average = sum / list.length;

  return Math.round(average);
}

export default function CS(props) {
  const averageCS = [
    findAverage(props.cs),
    findAverage(props.friend1CS),
    findAverage(props.friend2CS),
    findAverage(props.friend3CS)
  ];

  // Prep info for cs bar chart
  const csChartData = {
    labels: [
      'You',
      props.friend1SummName,
      props.friend2SummName,
      props.friend3SummName
    ],
    datasets: [{
      data: averageCS,
      backgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      hoverBackgroundColor: ['#b3c3d3', '#414959', '#414959', '#414959'],
      borderWidth: 0
    }]
  };
  const csChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          // Round to the nearest multiple of 10
          min: Math.round( (Math.min(...averageCS) - 10) / 10.0 ) * 10,
          max: Math.round( (Math.max(...averageCS) + 10) / 10.0 ) * 10,
          stepSize: 10,
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
      <h2>Average CS per Game</h2>
      <div>
        <HorizontalBar data={ csChartData } options={ csChartOptions } />
      </div>
    </div>
  );
}
