import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountDetails from '../../components/accountDetails/AccountDetails';
import AccountNav from '../../components/accountNav/AccountNav';
import './style.scss';

const MyAccount = () => {
    return (
        <section className='my_account'>
            <AccountNav />

            <Routes>
                <Route path="/" exact element={<AccountDetails />} />
                <Route path="/my-orders" exact element={<div />} />
                <Route path="/addresses" exact element={<div />} />
                <Route path="/paymants-methods" exact element={<div />} />
            </Routes>
        </section>
    );
};

export default MyAccount;