import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import AddItem from '../addItem/AddItem';
import AddressItem from '../addressItem/AddressItem';
import './style.scss';

const AccountAddresses = () => {
    const size = useWindowSize();
    const [showHide, setShoeHide] = useState(true);
    const prevPage = useNavigate();

    const addressesArr = [1, 2];
    const homeAddressesArr = [1, 2];
    const [selected, setSelected] = useState(null);
    const [homeSelected, setHomeSelected] = useState(null);

    return (
        <section className='account_adresses'>
            <span className="mobile_back_alt" onClick={() => prevPage("/my-account")}>
                <i className="icon-back-alt">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
                <span>Adresses</span>
            </span>
            {size.width < 768 && (
                <div className="mobile_tabs">
                    <span
                        className={showHide ? "active" : ""}
                        onClick={() => setShoeHide(true)}
                    >Haypost Branch</span>
                    <span
                        className={!showHide ? "active" : ""}
                        onClick={() => setShoeHide(false)}
                    >Home Delivery</span>
                </div>
            )}
            {size.width < 768 ? (
                showHide ? (
                    <div className="account_adresses_inner">
                        <h4>Haypost Branch</h4>
                        <div className="account_adresses_items_wrap">
                            <AddItem addItemTitle="Add Haypost branch" />
                            {addressesArr.map((item) => (
                                <AddressItem branch="post" key={item} onClick={() => setSelected(item)} selected={selected === item} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="account_adresses_inner">
                        <h4>Home Addresses</h4>
                        <div className="account_adresses_items_wrap">
                            <AddItem addItemTitle="Add home address" />
                            {homeAddressesArr.map((item) => (
                                <AddressItem branch="home" key={item} onClick={() => setHomeSelected(item)} selected={homeSelected === item} />
                            ))}
                        </div>
                    </div>
                )
            ) : (
                <>
                    <h3>Adresses </h3>
                    <div className="account_adresses_inner">
                        <h4>Haypost Branch</h4>
                        <div className="account_adresses_items_wrap">
                            <AddItem addItemTitle="Add Haypost branch" />
                            {addressesArr.map((item) => (
                                <AddressItem branch="post" key={item} onClick={() => setSelected(item)} selected={selected === item} />
                            ))}
                        </div>
                    </div>
                    <div className="account_adresses_inner">
                        <h4>Home Addresses</h4>
                        <div className="account_adresses_items_wrap">
                            <AddItem addItemTitle="Add home address" />
                            {homeAddressesArr.map((item) => (
                                <AddressItem branch="home" key={item} onClick={() => setHomeSelected(item)} selected={homeSelected === item} />
                            ))}
                        </div>
                    </div>
                </>
            )}

        </section>
    );
};

export default AccountAddresses;
