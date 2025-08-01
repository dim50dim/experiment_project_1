import { useState } from 'react'
import {Container, Typography} from '@mui/material';
import './App.css'
import FileUploader from './components/FileUploader';

function App() {
const [parsedDate, setParsedData] = useState([]);

  return (
    <>
         <FileUploader/>
    </>
  )
}

export default App
