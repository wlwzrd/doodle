import React from 'react';

const TextInput = (props) => { 
    const { value, onChange, placeholder, label, regex, name, required } = props;

    const handleChange = (event) => {
        if(new RegExp(regex)?.test(event.target.value)) {
            onChange(event.target.value);
        }
    }

    return(
        <label className="text-input">
            <span>{label}</span>
            <input type="text" onChange={handleChange} value={value} placeholder={placeholder} pattern={regex} name={name} required={required}/>
        </label>
    );
};

export default TextInput;