import React, { useState } from 'react';
import './style.scss';

const CustomTextarea = ({ textareaTitle }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div
            className={`custom_textarea ${inputValue ? "active" : ""}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        >
            <textarea></textarea>
            <span>{ textareaTitle }</span>
        </div>
    );
};

export default CustomTextarea;