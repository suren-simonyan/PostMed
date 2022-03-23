import React from 'react';
import PopupVerifyEmail from '../../components/popupVerifyEmail/PopupVerifyEmail';
import './style.scss';

const ResetPasswordSuccess = () => {
    return (
        <div className='modal_pages'>
            <PopupVerifyEmail />
            <div className="modal_inner">
                <h5 className='modal_title_center'>
                    <i className="icon-checked-alt"></i>
                    Success!
                </h5>
                <p>
                    <strong className='db'>Your password has been reset.</strong>
                    You can now sign in with your new password.
                </p>
                <button className='main_btn modal_signin'>Sign in</button>
            </div>
        </div>
    );
};

export default ResetPasswordSuccess;