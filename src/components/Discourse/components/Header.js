import React from 'react';
import 'bootstrap';
import {AnuraButton} from './AnuraButton'

export const Header = ({}) => {

    const wallet = '0xD7...B9BE';
    

    return (
        <div className='header' style={{padding: '1.5rem', width: '100%'}}>
            <h1 className='item1' style={{color: 'white', fontSize: '24px', margin: '0 0 0 2rem'}}>LOGOUT {wallet}</h1>
            <AnuraButton className='item2' >CREATE NEW</AnuraButton>
        </div>

    )}