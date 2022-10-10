import TextField from '@mui/material/TextField'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { MyData } from '../../models/MyData'
import FormGrandkid from '../form-grandchild/FormGrandkid'

interface FormChildProps {
  data?: MyData
  onChange: (key: string, value: any) => void
}
const FormChild: React.FC = () => {
  const methods = useFormContext()

  return (
    <>
      <Controller
        name='age'
        control={methods.control}
        defaultValue=''
        render={({field}) =>
        <TextField
          {...field} 
          label='Age' 
        />}
      />
      <FormGrandkid />
    </>
  )
}

export default FormChild
