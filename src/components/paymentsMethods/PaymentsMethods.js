import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddItem from '../addItem/AddItem';
import AddressItem from '../addressItem/AddressItem';
import './style.scss';

const PaymentsMethods = () => {
    const prevPage = useNavigate();

    const addressesArr = [1, 2, 3];
    const [selected, setSelected] = useState(null);

    return (
        <article className='payments_methods'>
            <span className="mobile_back_alt" onClick={() => prevPage("/my-account")}>
                <i className="icon-back-alt">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
                <span>Payments methods</span>
            </span>
            <h3>Payments methods</h3>
            <div className="payments_methods_items_wrap">
                <AddItem addItemTitle="Add Bank card" />
                {addressesArr.map((item) => (
                    <AddressItem
                        branch="bankCard"
                        bankCard="master"
                        bankName="AMERIA BANK"
                        key={item}
                        onClick={() => setSelected(item)} selected={selected === item}
                    />
                ))}
            </div>
        </article>
    );
};

export default PaymentsMethods;
