import React from "react";

const Form = (props) => {
const { onSubmit, children, novalidate } = props;
    return (
        <form onSubmit={onSubmit} className="form" noValidate={novalidate}>
            {children}
        </form>
    );
};

export default Form;