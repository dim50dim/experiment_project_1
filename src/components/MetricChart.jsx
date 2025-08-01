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

        
      return {
        label: expId,
        data: expData.map(d => ({ x: d.step, y: d.value })),
        borderColor: stringToColor(expId),
        fill: false
      };
    });

    return { datasets };
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: { type: 'linear', title: { display: true, text: 'Step' } },
      y: { title: { display: true, text: 'Value' } }
    }
  };

  return (
    <div>
            {metrics.map(metric => (
        <div key={metric}>
          <h3>{metric}</h3>
          <Line data={getChartData(metric)} options={chartOptions} />
        </div>
      ))}
    </div>
  )
}
function stringToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const color = '#' + ((hash >> 24) & 0xFF).toString(16).padStart(2, '0') +
                      ((hash >> 16) & 0xFF).toString(16).padStart(2, '0') +
                      ((hash >> 8) & 0xFF).toString(16).padStart(2, '0');
  return color;
}
export default MetricChart
