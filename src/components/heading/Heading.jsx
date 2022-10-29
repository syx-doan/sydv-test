import React from 'react';
import './Heading.scss'

function Heading({ children, className = '' }) {
    return (
        <div className={className}> 
           <h2 className='heading'>{children}</h2>
        </div>
    );
}

export default Heading;
