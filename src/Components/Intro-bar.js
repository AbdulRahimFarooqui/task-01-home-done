import React from 'react';
import reactDom from 'react-dom';
import MyButton from './MyButton';

export default function Intro() {
    return (
        <div className='intro'>
            <p className='intro-text'>
                <s>Boostrap</s>
                Material UI Rocks!
            </p>
            <MyButton height={12} width={9} fontSize={15} text="Sign In" />
        </div>
    )
}