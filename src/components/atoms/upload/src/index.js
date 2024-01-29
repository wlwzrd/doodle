import React from "react";

const Upload = (props) => {
    const { onChange, name, required } = props;
    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        event.target.querySelector('input').files = files;
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <label className="upload" onDrop={handleDrop} onDragOver={handleDragOver}>
            <span className="upload-title">Drop your image here</span>
            or
            <input type="file" id="images" accept="image/*" name={name} required={required}/>
        </label>
    );
};

export default Upload;