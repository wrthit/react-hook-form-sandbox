import React from 'react'
import { useState } from 'react'
import FormChild from '../../components/form-child/FormChild'
import { MyData } from '../../models/MyData'
import { Button, TextField } from '@mui/material'
import './FormParent.scss'

const FormParent = () => {
  const [data, setData] = useState<MyData>()
  
  const submitFunction = () => {
    console.log('submitting')
    console.log(data)
  }

  return (
    <div className='FormParent'>
      <form onSubmit={submitFunction}>
        <div className='content'>

          <TextField label='first name'/>
          <TextField label='last name' />
          <FormChild />
          <Button type='submit' variant='contained'>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default FormParent
