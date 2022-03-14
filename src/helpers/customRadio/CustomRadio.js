import React from 'react';
import './style.scss';

const CustomRadio = ({ labelName, radioTitle, checked }) => {
    return (
        <label className='custom_radio'>
            <span className='custom_radio_title'>{ radioTitle }</span>
            <input className='custom_radio_input' type="radio" name={labelName} checked={checked} onChange={() => (console.log('checked'))} />
            <span className="custom_radio_checkmark"></span>
        </label>
    );
};

export default CustomRadio;