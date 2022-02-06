import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Bottom() {
    return (
        <div className="bottom-main">
            <div className='div-bottom'>
                <div className='p-div'>
                    <p className='p-bottom'>About</p><p>·</p>
                    <p className='p-bottom'>Contact</p><p>·</p>
                    <p className='p-bottom'>Terms of Use</p><p>·</p>
                    <p className='p-bottom'>Privacy Policy</p>
                </div>
                <p style={{ fontSize:'14px', fontWeight: "400", color:'#4d5d6e' }}>© Your Website 2022. All Rights Reserved.</p>
            </div>
            <div className='icons-social'>
                <FacebookIcon color='primary' fontSize='large' />
                <TwitterIcon color='primary' fontSize='large' />
                <InstagramIcon color='primary' fontSize='large' />
            </div>
        </div>
    )
}