import { Button, TextField } from '@mui/material'
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import FormChild from '../../components/form-child/FormChild'
import { MyData } from '../../models/MyData'
import './FormParent.scss'

const FormParent = () => {
  const methods = useForm<MyData>();
  
  const submitFunction: SubmitHandler<MyData> = (data: MyData) => { 
    console.log('submitting')
    console.log(data)
  }

  return (
    <div className='FormParent'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitFunction)}>
          <div className='content'>
            <Controller 
              name='name.firstName'
              control={methods.control}
              defaultValue=''
              render={({ field }) =>
              <TextField
                {...field}
                label='First name' 
              />}
            />
            <Controller
              name='name.lastName'
              control={methods.control}
              defaultValue=''
              render={({ field }) => 
              <TextField 
                {...field}
                label='Last name'
              />}
            />
            <FormChild/>
            <Button type='submit' variant='contained'>Save</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default FormParent
