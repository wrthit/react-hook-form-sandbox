import React from 'react'
import TextField from '@mui/material/TextField'
import FormGrandkid from '../form-grandchild/FormGrandkid'

const FormChild = () => {
  return (
    <>
      <TextField label='age' type='number'/>
      <FormGrandkid />
    </>
  )
}

export default FormChild
