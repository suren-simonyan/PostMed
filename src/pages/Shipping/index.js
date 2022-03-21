import React, { useState } from 'react';
import './style.scss';
import CustomRadio from '../../helpers/customRadio/CustomRadio';
import BagSummery from '../../components/bag/BagSummery';
import CustomSelect from '../../helpers/customSelect/CustomSelect';
import CustomInput from '../../helpers/customInput/CustomInput';
import CustomTextarea from '../../helpers/customTextarea/CustomTextarea';
import CustomCheckbox from '../../helpers/customCheckbox/CustomCheckbox';
import AddItem from '../../components/addItem/AddItem';
import AddressItem from '../../components/addressItem/AddressItem';
import useWindowSize from '../../hooks/useWindowSize';

const Shipping = () => {
    const infodata = [
        {
            id: 1,
            info: "0001 Նալբանդյան 21",
        },
        {
            id: 2,
            info: "0001 Նալբանդյան 21",
        },
        {
            id: 3,
            info: "0001 Նալբանդյան 21",
        },
    ];

    const size = useWindowSize();

    const addressesArr = [1, 2];
    const cardsArr = [1, 2];

    const [selected, setSelected] = useState(null);
    const [cardSelected, setCardSelected] = useState(null);
    const [active, setActive] = useState(true);
    const [paymentActive, setPaymentActive] = useState(true);

    return (
        <section className='shipping_method'>
            <h1>Shipping methods</h1>

            <div className="shipping_method_inner">

                <div className="shipping_method_left">
                    <div className="shipping_delivery_type_wrap">

                        <div
                            className={`shipping_delivery_type ${active ? "active" : ""}`}
                            onClick={() => setActive(true)}
                        >
                            <div className="shipping_delivery_type_inner">
                                <CustomRadio labelName="delivery_type" radioTitle="Haypost Branch" checked={active} icon="icon-Default" />
                                <strong>1200 ֏</strong>
                            </div>
                            <span>Will be delivered same day </span>
                        </div>

                        <div
                            className={`shipping_delivery_type ${active ? "" : "active"}`}
                            onClick={() => setActive(false)}
                        >
                            <div className="shipping_delivery_type_inner">
                                <CustomRadio labelName="delivery_type" radioTitle="Home Delivery" checked={!active} icon="icon-Home" />
                                <strong>1200 ֏</strong>
                            </div>
                            <span>Will be delivered same day </span>
                        </div>

                    </div>

                    {active ? (
                        <div className="shipping_choose_branch">
                            <h3>Choose a Haypost branch</h3>
                            <div className="shipping_region">
                                <CustomSelect title="Region" infoData={infodata} />
                            </div>
                            <div className="shipping_hayposy_branch">
                                <CustomSelect title="Haypost branch" infoData={infodata} />
                            </div>
                            <div className="shipping_saved_branches">
                                <AddItem addItemTitle="Add address" />
                                {addressesArr.map((item) => (
                                    <AddressItem branch="post" key={item} onClick={() => setSelected(item)} selected={selected === item} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="shipping_delivery">
                            <h3>Delivery Adress</h3>
                            <div className="shipping_delivery_address">
                                <CustomSelect title="Region" infoData={infodata} />
                                <CustomSelect title="City" infoData={infodata} />
                                <CustomSelect title="Street" infoData={infodata} />
                            </div>
                            <div className="shipping_delivery_building">
                                <div className="shipping_apartment_house">
                                    <CustomRadio labelName="apartment" radioTitle="Apartment" checked />
                                    <CustomRadio labelName="apartment" radioTitle="House" />
                                </div>
                                <div className="shipping_apartment_house_input">
                                    <CustomInput inputTitle="Bulidng" />
                                    <CustomInput inputTitle="Appartment" />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="shipping_contact_info">
                        <h3>Contact Information</h3>
                        <div className='shipping_inputs'>
                            <CustomInput inputTitle="Name" />
                            <CustomInput inputTitle="Surname" />
                            <CustomInput inputTitle="Phone number" />
                            <CustomInput inputTitle="Email" />
                        </div>
                        <h4><strong>Note</strong> <span>(Optional)</span></h4>
                        <CustomTextarea textareaTitle="Note" />
                    </div>

                    <div className="shipping_payments_methods">
                        <h3>Payment methods</h3>

                        <div className="shipping_payments_type_wrap">
                            <div
                                className={`shipping_payments_type ${paymentActive ? "payment_active" : ""}`}
                                onClick={() => setPaymentActive(true)}
                            >
                                <CustomRadio labelName="shipping_payments" radioTitle="Credit Card" checked={paymentActive} icon="icon-Card" />
                            </div>

                            <div
                                className={`shipping_payments_type ${paymentActive ? "" : "payment_active"}`}
                                onClick={() => setPaymentActive(false)}
                            >
                                <CustomRadio labelName="shipping_payments" radioTitle="Cash" checked={!paymentActive} icon="icon-Cash" />
                            </div>

                        </div>

                        <div className="shipping_saved_cards">
                            <AddItem addItemTitle="Use another Card" cardIcon="icon-Card" hasCheckBox={true} />
                            {cardsArr.map((item) => (
                                <AddressItem branch="bankCard" bankCard="visa" bankName="Ameria bank" key={item} onClick={() => setCardSelected(item)} selected={cardSelected === item} />
                            ))}
                        </div>

                    </div>

                    <div className="shipping_agree_terms">
                        <CustomCheckbox productName="Save Card" />
                        <CustomCheckbox productName="I agree to terms and conditions" />

                        <button className="main_btn">Checkout</button>
                    </div>

                </div>

                {size.width < 768 ? (
                    <BagSummery editBag={false} showButton={true} />
                ) : (
                    <BagSummery editBag={true} />
                )}                    
                

                

            </div>
        </section>
    );
};

export default Shipping;