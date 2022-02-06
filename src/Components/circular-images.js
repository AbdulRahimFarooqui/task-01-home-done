import React from 'react'
import details from './circular.json'
import Grid from '@mui/material/Grid';

export default function Circular() {
    return (
        <div className='cir-cards'>
            <div className='text-cir'>What people are saying...</div>
            <Grid container xs={12} lg={12} className='grid-cir'>
                {Object.keys(details).map(keyName => {
                    return (
                            <Grid item className='cir-card'>
                                <div className="cir-img-card" style={{height:'180px', width:'180px'}} >
                                    <img className='real-image' src={details[keyName].url.toString()} width="100%" height="100%" />
                                </div>
                                <div className="cir-card-text">
                                    <div className='cir-cardText'>
                                        <p className="cir-card-heading" style={{ fontSize: "23px", fontWeight: "500" }}>{details[keyName].heading}</p>
                                        <p className="cir-card-para" style={{ fontSize: "16px", fontWeight: "100" }}>{details[keyName].text}</p>
                                    </div>
                                </div>
                            </Grid>
                        )
                })}
            </Grid>
        </div>
    )
}