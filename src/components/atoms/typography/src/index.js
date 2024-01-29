
import React from 'react';

const Typography = (props) => {
    const { children, component } = props;

    const reactComponent = {
        h1: <h1>{children}</h1>,
        h2: <h2>{children}</h2>,
        h3: <h3>{children}</h3>,
        h4: <h4>{children}</h4>,
        p: <p>{children}</p>,
    };
    
    return (
        reactComponent[component]
    );
}

export default Typography;
