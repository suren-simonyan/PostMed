import React from 'react';
import CustomInput from '../../helpers/customInput/CustomInput';
import './style.scss';

const index = () => {
    return (
        <div className='modal_pages'>
            <div className="modal_inner">
                <h5>
                    <i className="icon-Password">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    Reset password
                </h5>
                <p>Please enter your new password.</p>
                <CustomInput inputType="password" inputTitle="Password" />
                <CustomInput inputType="password" inputTitle="Re-type password" />
                <button className='main_btn modal_reset'>Reset</button>
            </div>
        </div>
    );
};

export default index;
