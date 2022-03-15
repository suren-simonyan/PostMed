import React, { useState } from 'react';
import './style.scss';
import CustomRadio from '../../helpers/customRadio/CustomRadio';
import BagSummery from '../../components/bag/BagSummery';
import CustomSelect from '../../helpers/customSelect/CustomSelect';
import CustomInput from '../../helpers/customInput/CustomInput';

const Shipping = () => {
    const [active, setActive] = useState(true);

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

                    <div className="shipping_choose_branch">
                        <h3>Choose a Haypost branch</h3>
                        <div className="shipping_region">
                            <CustomSelect />
                        </div>
                    </div>

                    <div className="shipping_contact_info">
                        <h3>Contact Information</h3>

                        <CustomInput />

                    </div>

                </div>

                <BagSummery editBag={true} />

            </div>
        </section>
    );
};

export default Shipping;