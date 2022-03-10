import React from 'react';
import './style.scss';

const CustomCheckbox = ({ productName }) => {
    return (
        <label className='checkbox'>
            { productName && <span className="checkbox_text">{productName}</span> }
            <input type="checkbox" />
            <span className='checkmark'></span>
        </label>
    );
};

export default CustomCheckbox;