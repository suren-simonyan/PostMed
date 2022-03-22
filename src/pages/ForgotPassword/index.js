import React from 'react';
import './style.scss';
import CustomInput from '../../helpers/customInput/CustomInput';

const index = () => {
    return (
        <div className='modal_pages'>
            <div className="modal_inner">
                <h5>Forgot password</h5>
                <p>Enter the Email associated with your account
                    and we’ll send an email with instructions to
                    reset your pasword.</p>
                <CustomInput inputTitle="Email" inputType="email" />

                <button className="main_btn forgot_pass">Send reset instruction</button>
                <span className='back_to'>Back to Sing in</span>
            </div>
        </div>
    );
};

export default index;
