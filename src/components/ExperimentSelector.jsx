// import React from 'react'
import { Autocomplete,TextField } from '@mui/material'
const ExperimentSelector = ({experiments, selected,onChange}) => {
  return (
    <div>
      <Autocomplete
        multiple options={experiments}
        value={selected}
        onChange={(event,newValue) => onChange(newValue)}
          renderInput={(params) => <TextField {...params} label="Select Experiments" />}
      />
    </div>
  )
}

export default ExperimentSelector
