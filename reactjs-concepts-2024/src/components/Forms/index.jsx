import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function FormComponent() {
  return (
    <div>
        <h1>Form Component</h1>
    
        <form noValidate autoComplete="off">
        <FormControl sx={{ width: '25ch' }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" name="name"/>
        </FormControl>

        <FormControl sx={{ width: '25ch' }}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" name="email"/>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
    </form>
      
    </div>
  )
}
