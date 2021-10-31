import React, { useMemo } from 'react';

import utils from './Button.module.css';

// btnStyle -> black, outline, filled
const Button = ({ children, btnStyle, className, size, onClick }) => {
    const button = useMemo(() => {
        return {
            style: utils[`btn--${btnStyle}`],
            size: utils[`btn--${size}`]
        }
    }, [size, btnStyle])
    return (
        <button
            className={`${className} ${utils.btn} ${button.style} ${button.size}`}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button
