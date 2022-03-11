import React, { useState } from 'react';
import CustomCheckbox from '../../helpers/customCheckbox/CustomCheckbox';
import CounterProduct from '../../helpers/counterProduct/CounterProduct';
import './style.scss';
import medicineImg from '../../resourses/images/medicineImg1.png';

const BagProduct = () => {
    const [count, setCount] = useState(1);
    
    return (
        <article className='bag_item'>
            <div className="bag_prod_info">
                <CustomCheckbox />
                <div className="bag_prod_img">
                    <img src={medicineImg} alt="Cetamol" />
                </div>
                <div className='bag_prod_name'>
                    <h4>Cetamol</h4>
                    <h5>Spray</h5>
                    <span>120 mg/5 ml</span>
                </div>
            </div>
            <div className="bag_prod_count">
                <CounterProduct count={count} setCount={setCount} />
                <div className="product_type_inner_btn">
                    <button className="prod_info_btn selected">item</button>
                    <button className="prod_info_btn">Pack</button>
                </div>
            </div>
            <div className="bag_prod_price_fav">
                <div className="bag_prod_price">
                    <span className='new_price'>1200 ֏</span>
                    <span className="old_price">2000 ֏</span>
                </div>
                <div className="bag_fav_remove">
                    <i className="icon-Heart">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    <i className="icon-Garbage">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                </div>
            </div>
        </article>
    );
};

export default BagProduct;