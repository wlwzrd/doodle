import React from 'react';


const Button = (props) => {
    const { children, color, onClick, disabled } = props;
    const className = `button button--${color}`;
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>);
};

export default Button;