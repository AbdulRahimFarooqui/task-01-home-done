import React from 'react'
import details from './icons.json'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function ThirdComponent(){
    return(
        <div>
            <Grid container className='icons-main'>
            {Object.keys(details).map(keyName=>{
                return(
                    <div className='icons-details'>
                        <Grid item xs={6} lg={12} >
                        <img className='image-icons' src={details[keyName].url.toString()} height={60} width={60}/>
                        <p style={{fontSize:"29px", fontWeight:"500"}}>{details[keyName].heading}</p>
                        <p style={{fontSize:"20px", fontWeight:"100"}}>{details[keyName].text}</p>
                        </Grid>
                    </div>
                )
            })}
            </Grid>
        </div>
    )
}