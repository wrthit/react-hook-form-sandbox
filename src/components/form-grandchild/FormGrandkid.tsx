import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { MyData } from '../../models/MyData'
import { Controller, useFormContext } from 'react-hook-form'

const FormGrandkid: React.FC = () => {
  const methods = useFormContext()

  return (
    <Controller
      name='enroll'
      control={methods.control}
      defaultValue={false}
      render={({field}) =>
        <FormControlLabel 
          control={<Checkbox 
            onChange={(e) => field.onChange(e.target.checked)}
            checked={field.value}
          />} 
          label="Enroll?" />
      }
    />
  )
}

export default FormGrandkid
