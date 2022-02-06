import React from 'react'
import details from './pic-text.json'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Pic_Text() {

    return (
        <div>
            <Grid container className='cards'>
                {Object.keys(details).map(keyName => {
                    if ((Math.floor(parseInt(details[keyName].serial) / 2)) === (parseInt(details[keyName].serial) / 2)) {
                        return (
                            <Grid xs={12} md={12} item className='card'>
                                <div className="img-card" >
                                    <img src={details[keyName].url.toString()} width="100%" height="100%" />
                                </div>
                                <div className="card-text">
                                    <div className='cardText'>
                                        <p className="card-heading" style={{ fontSize: "31px", fontWeight: "500" }}>{details[keyName].heading}</p>
                                        <p className="card-para" style={{ fontSize: "20px", fontWeight: "100" }}>{details[keyName].text}</p>
                                    </div>
                                </div>
                            </Grid>
                        )
                    }
                    else {
                        return (
                            <Grid item xs={12} md={12} className='card'>
                                <div className="card-text">
                                    <div className='cardText'>
                                        <p className="card-heading" style={{ fontSize: "31px", fontWeight: "500" }}>{details[keyName].heading}</p>
                                        <p className="card-para" style={{ fontSize: "20px", fontWeight: "100" }}>{details[keyName].text}</p>
                                    </div>
                                </div>
                                <div className="img-card" >
                                    <img src={details[keyName].url.toString()} width="100%" />
                                </div>
                            </Grid>
                        )
                    }
                })}
            </Grid>
        </div>
    )
}