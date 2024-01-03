import React from 'react'
import Bar from './Bar'
import { Button } from '@mui/material'

function UploadDocuments() {
  return (
    <div className='container-half container'>
      <h3>Upload Documents</h3>
      <h4>Click to proceed the process</h4>
       <Bar />
       <Bar />
       <Bar />
       <Bar />
       <Bar />
       <Bar />
       
       <Button variant='contained' color='success'>Submit</Button>
    </div>
  )
}

export default UploadDocuments
