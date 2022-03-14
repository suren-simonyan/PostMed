import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountNav from '../../components/accountNav/AccountNav';
import './style.scss';

const MyAccount = () => {
    return (
        <section className='my_account'>
            <AccountNav />
            <Outlet />
        </section>
    );
};

export default MyAccount;