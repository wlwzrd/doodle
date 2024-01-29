import React from 'react';

const Card = (props) => {
    const { children, alignItems } = props;
    const alignItemsClass = alignItems ? `card--${alignItems}` : '';

    return (
        <div className={`card ${alignItemsClass}`}>
            {children}
        </div>
    );
};

export default Card;