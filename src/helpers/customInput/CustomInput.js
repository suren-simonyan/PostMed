import React, { useState } from 'react';
import './style.scss';

const CustomInput = ({ inputTitle, inputType }) => {
    const [inputValue, setInputValue] = useState('');
    const [hideShowPass, setHideShowPass] = useState(true);

    return (
        <div
            className={`custom_input ${inputValue ? "active" : ""} ${inputType === "password" ? "custom_password" : ""}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        >

            {inputType === "password" ? (
                <>
                    <input type={hideShowPass ? inputType : "text"} />
                    <span
                        className="icon-Eye hide_show_pass"
                        onClick={() => setHideShowPass(!hideShowPass)}
                    ></span>
                </>
            ) : (
                <input type={inputType} />
            )}

            <span>{inputTitle}</span>
        </div>
    );
};

CustomInput.defaultProps = {
    inputType: "text",
};

export default CustomInput;
