import React from 'react';
import OrderItem from '../orderItem/OrderItem';
import './style.scss';

const AccountOrders = () => {
    return (
        <section className='account_orders'>
            <h3>My Orders</h3>
            <OrderItem />
        </section>
    );
};

export default AccountOrders;