import { useState } from 'react'
import {Container, Typography} from '@mui/material';
import './App.css'
import FileUploader from './components/FileUploader';

function App() {
const [parsedData, setParsedData] = useState([]);
  const [selectedExperiments, setSelectedExperiments] = useState([]);

  const experimentIds = [...new Set(parsedData.map(item => item.experiment_id))];
  return (
    <>
    <Container>
  <Typography variant="h4" gutterBottom>MLOps Experiment Tracker</Typography>
      <FileUploader onDataParsed={setParsedData} />
      {experimentIds.length > 0 && (
        <ExperimentSelector
          experiments={experimentIds}
          selected={selectedExperiments}
          onChange={setSelectedExperiments}
        />
      )}
      {selectedExperiments.length > 0 && (
        <MetricChart data={parsedData} selectedExperiments={selectedExperiments} />
      )}
    </Container>
        
    </>
  )
}

export default App
