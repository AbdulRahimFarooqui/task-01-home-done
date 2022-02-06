import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MyButton from './MyButton';
import Grid from '@mui/material/Grid';

export default function SearchBar() {
  //here use useReducer for storing the value of input globally!
  let [inputVal, setInputVal] = useState("")
  return (
    <div className='search-parent'>
      <Grid container className='searchbox'>
        <Grid item lg={5} xs={6} md={6}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%',maxWidth:'100%' , backgroundColor: 'White' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Enter your email..." variant="outlined" size="small" />
          </Box>
        </Grid>
      </Grid>
      <div className='button-search'>
        <Grid container>
          <Grid item lg={4} md={2} xs={2}>
            <MyButton text="Sign Up!" />
          </Grid>
        </Grid>
      </div>

    </div>
  );
}