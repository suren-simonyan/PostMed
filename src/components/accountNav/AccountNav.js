import React from 'react';
import './style.scss';
import { useNavigate, NavLink } from "react-router-dom";

const AccountNav = () => {

    const history = useNavigate();

    return (
        <section className='account_nav'>
            <h1>My Account</h1>
            <h2><span>Welcome, </span> Armen Sargsyan</h2>

            <div className="account_nav_inner">
                <NavLink to="account-details" className="account_nav_sub">
                    <i className="icon-Settings">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    <span>My Account</span>
                </NavLink>
                <NavLink to="my-orders" className="account_nav_sub">
                    <i className="icon-Box1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    <span>My Orders</span>
                </NavLink>
                <NavLink to="account-addresses" className="account_nav_sub">
                    <i className="icon-Address1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    <span>Adresses</span>
                </NavLink>
                <NavLink to="/favorites" className="account_nav_sub">
                    <i className="icon-Heart">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    <span>Favorites</span>
                </NavLink>
                <NavLink to="/" className="account_nav_sub">
                    <i className="icon-Credit-card">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    <span>Payments methods</span>
                </NavLink>

                <div className="account_nav_sub log_out">
                    <i className="icon-Entry">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                    </i>
                    <span>Log Out</span>
                </div>


            </div>
        </section>
    );
};

export default AccountNav;