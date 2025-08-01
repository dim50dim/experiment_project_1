import React from 'react'
import Papa from 'papaparse';
import { Button } from '@mui/material';
const FileUploader = ({onDataParsed}) => {
    const handleFileChange = (event) => {
          const file = event.target.files[0];
      Papa.parse(file,{
        header:true,
        dynamicTyping: true,
        complete:(results) => {
            const cleaned = results.data.filter(row =>
                   row.experiment_id && row.metric_name && row.step != null && row.value != null

             );
             onDataParsed(cleaned);
        }
      })    
    }
  return (
    <div>
        <Button>
            
        </Button>
    </div>
  )
}

export default FileUploader
