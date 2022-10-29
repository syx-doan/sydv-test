import React from 'react';
import './text.scss'

function Text({ children }) {
    return (
        <p className="text">
          {children}
        </p>
    );
}

export default Text;
