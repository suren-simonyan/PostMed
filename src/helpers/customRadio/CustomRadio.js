import React from 'react';
import './style.scss';

const CustomRadio = ({ labelName, radioTitle, checked, icon }) => {
    return (
        <label className='custom_radio'>
            <span className='custom_radio_title'>{icon && <i className={icon}></i>}{ radioTitle }</span>
            <input className='custom_radio_input' type="radio" name={labelName} checked={checked} onChange={(e) => e.target.value} />
            <span className="custom_radio_checkmark"></span>
        </label>
    );
};

export default CustomRadio;