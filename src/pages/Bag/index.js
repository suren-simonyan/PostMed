import React from 'react';
import BagProduct from '../../components/bag/BagProduct';
import BagSummery from '../../components/bag/BagSummery';
import CustomCheckbox from '../../helpers/customCheckbox/CustomCheckbox';
import CustomRadio from '../../helpers/customRadio/CustomRadio';
import './style.scss';

const Bag = () => {

    const productsArr = [1,2,3,4];

    return (
        <section className='bag'>
            <h1>Bag</h1>
            <div className="bag_select_all">
                <CustomCheckbox productName="Select All" />
            </div>
            <div className="bag_inner">
                <div className="bag_items_wrap">
                    {productsArr && productsArr.map((item) => (
                        <BagProduct key={item} />
                    ))}
                </div>
                <div className="bag_sidebar">
                    <div className="bag_shipping">
                        <h4>Shipping methods</h4>
                        <div className="bag_shipping_info">
                            <div className='bag_shipping_info_sub'>
                                <CustomRadio labelName="shippingLabel" radioTitle="Haypost branch" checked={ true } />
                                <span>Will be delivered same day </span>
                            </div>
                            <span>800 ֏ </span>
                        </div>
                        <div className="bag_shipping_info">
                            <div className='bag_shipping_info_sub'>
                                <CustomRadio labelName="shippingLabel" radioTitle="Home Delivery" />
                                <div className="bag_shipping_home">
                                    <span>Yerevan</span>
                                </div>
                                <span>Will be delivered same day </span>
                            </div>
                            <span>800 ֏ </span>
                        </div>
                    </div>
                    <BagSummery showButton={true} />
                </div>
            </div>
        </section>
    );
};

export default Bag;