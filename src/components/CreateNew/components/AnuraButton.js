import 'bootstrap';
import * as React from 'react';

export const AnuraButton = ({ onClick, children }) => {

    return (
      <button type="button" onClick={onClick} style={{  
        padding: '0.15rem 4rem',
        background: 'rgba(37, 60, 120, 0.9)',
        border: '1px solid #FFFFFF',
        borderRadius: '2px',
        color: 'white',
        fontFamily: 'Night Machine',
        fontWeight: '400',
        fontSize: 'x-large',
        cursor: 'pointer',
        margin: '1rem 0.5rem 0 2rem',
        height: '40px'}}>
        {children}
      </button>
    );
}