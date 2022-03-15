import React, { useState } from 'react';
import './style.scss';

const CustomInput = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div
            className={`custom_input ${inputValue ? "active" : ""}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        >
            <input type="text" />
            <span>Name</span>
        </div>
    );
};

export default CustomInput;
