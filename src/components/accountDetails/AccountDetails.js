import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const AccountDetails = () => {
    const prevPage = useNavigate();

    return (
        <section className='account_details'>
            <span className="mobile_back_alt" onClick={() => prevPage("/my-account")}>
                <i className="icon-back-alt">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
                <span>My Account</span>
            </span>
            <h3>Account Details</h3>

            <div className="account_details_sub">
                <div className='account_details_info'>
                    <span>Email</span>
                    <strong>ArmenSargsyan@president.am</strong>
                </div>
                <i className="icon-Write">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
            </div>

            <div className="account_details_sub">
                <i className="icon-Write">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>

                <div className='account_details_info'>
                    <span>Name Surname</span>
                    <strong>Armen Sargsyan</strong>
                </div>

                <div className='account_details_info'>
                    <span>Phone number</span>
                    <strong>+37433044433</strong>
                </div>

                <div className='account_details_info'>
                    <span>Data of birthday</span>
                    <strong>_____________________</strong>
                </div>

                <div className='account_details_info'>
                    <span>Sex</span>
                    <strong>_____________________</strong>
                </div>

            </div>

            <div className="account_details_sub">
                <div className='account_details_info'>
                    <span>Password</span>
                    <strong>***********</strong>
                    <i className="icon-Write">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                </div>
            </div>

        </section>
    );
};

export default AccountDetails;