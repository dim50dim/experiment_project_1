import React from 'react'
import { Autocomplete,TextField } from '@mui/material'
const ExperimentSelector = ({experiments, selected,onChange}) => {
  return (
    <div>
      <Autocomplete
        multiple options={experiments}
        value={selected}
        onChange={(event,newValue) => onChange(newValue)}
      />
    </div>
  )
}

export default ExperimentSelector
