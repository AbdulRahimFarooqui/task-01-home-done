import React from 'react';
import SearchBar from './Searchbar';

export default function ComponentSea({ height, text }) {
    const strHeight = height.toString() + 'px'
    return (
        <div className='main-masthead' style={{ height: strHeight }}>
            <div className='center-mast'>
                <p className='text-masthead'>{text}</p>
            </div>
            <div className='input'>
                <SearchBar />
            </div>
        </div>
    )
}
