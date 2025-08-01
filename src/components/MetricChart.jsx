import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, PointElement, LinearScale,
  Title, Tooltip, Legend, CategoryScale
} from 'chart.js';


const MetricChart = ({data,selectedExperiments}) => {
      const metrics = [...new Set(data.map(d => d.metric_name))];

  const getChartData = (metric) => {
    const datasets = selectedExperiments.map(expId => {
      const expData = data
        .filter(d => d.experiment_id === expId && d.metric_name === metric)
        .sort((a, b) => a.step - b.step);
  return (
    <div>
      
    </div>
  )
}

export default MetricChart
