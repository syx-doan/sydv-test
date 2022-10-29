import React from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

function Button({ to, href, children, className = '', onClick, ...passProps }) {
    const pops = { onClick, ...passProps };
    let Comp = 'button';
    if (to) {
        pops.to = to;
        Comp = Link;
    } else if (href) {
        pops.href = href;
        Comp = 'a';
    }
    return (
        <Comp className="header-auth" {...pops}>
            <span className={className}> {children}</span>
        </Comp>
    );
}

export default Button;
