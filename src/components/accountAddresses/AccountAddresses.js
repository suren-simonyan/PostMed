import React, { useState } from 'react';
import AddItem from '../addItem/AddItem';
import AddressItem from '../addressItem/AddressItem';
import './style.scss';

const AccountAddresses = () => {
    const addressesArr = [1, 2];
    const homeAddressesArr = [1, 2];
    const [selected, setSelected] = useState(null);
    const [homeSelected, setHomeSelected] = useState(null);

    return (
        <section className='account_adresses'>
            <h3>Adresses </h3>
            <div className="account_adresses_inner">
                <h4>Haypost Branch</h4>
                <div className="account_adresses_items_wrap">
                    <AddItem addItemTitle="Add Haypost branch" />
                    {addressesArr.map((item) => (
                        <AddressItem branch="post" key={item} onClick={() => setSelected(item)} selected={selected === item}/>
                    ))}
                </div>
            </div>

            <div className="account_adresses_inner">
                <h4>Home Addresses</h4>
                <div className="account_adresses_items_wrap">
                    <AddItem addItemTitle="Add home address" />
                    {homeAddressesArr.map((item) => (
                        <AddressItem branch="home" key={item} onClick={() => setHomeSelected(item)} selected={homeSelected === item}/>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default AccountAddresses;
