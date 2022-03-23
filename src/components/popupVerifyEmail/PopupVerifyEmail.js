import React, { useState } from 'react';
import './style.scss';
import useBodyScrollHidden from '../../hooks/useBodyScrollHidden';

const PopupVerifyEmail = () => {
    const [openedPopup, setOpenedPopup] = useState(true);

    useBodyScrollHidden(openedPopup);

    return (
        <div className={`popup_verify_email_wrap ${openedPopup ? "opened" : ""}`}>
            <div className="popup_verify_email">
                <i
                    className="icon-Close"
                    onClick={() => setOpenedPopup(false)}
                >
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
                <h5>Verify Your Email</h5>
                <i className="icon-safe-mail">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                    <span className="path5"></span>
                    <span className="path6"></span>
                    <span className="path7"></span>
                </i>

                <p>Your acount  has been sucessfuly registred.
                    To compacte the procces pelase cheak yor email
                    <strong>ArmenSargsyan@president.am</strong>
                    and click the link to activate your account.</p>

                <a href="#" className='resend_email'>Resend email</a>
            </div>
        </div>
    );
};

export default PopupVerifyEmail;