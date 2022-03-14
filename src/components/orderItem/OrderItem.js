import React from 'react';
import './style.scss';
import productImg from '../../resourses/images/medicineImg1.png';

const OrderItem = () => {
    return (
        <div className='order_item'>
            <div className="order_item_info">
                <div className="order_item_id_status">
                    <div className="order_item_id_status_left">
                        <div className="order_item_id">
                            <div className="order_item_id_sub">
                                <span>Order ID</span>
                                <strong>637433</strong>
                            </div>
                            <time>11.10.2021</time>
                        </div>
                        <div className="order_item_status">
                            <div className="order_item_status_sub">
                                <span>Total</span>
                                <strong>1200 ֏</strong>
                            </div>
                            <div className="order_item_status_sub">
                                <span>Status</span>
                                <strong className='in_progress'>In Process </strong>
                            </div>
                        </div>
                    </div>
                    <button className='btn_transparent'>Add to Card</button>
                </div>
            </div>

            <div className="order_item_details">
                <div className="order_confirmation_product_wrap">
                    <div className="order_confirmation_product">
                        <div className="order_confirmation_product_img">
                            <img src={productImg} alt="Poduct name" />
                        </div>
                        <div className="order_confirmation_product_info">
                            <h4>Cetamol</h4>
                            <div className="order_confirmation_product_sub">
                                <span>Strenght </span>
                                <span className='info_detail'>120 mg/5 ml</span>
                            </div>
                            <div className="order_confirmation_product_sub">
                                <span>Type </span>
                                <span className='info_detail'>Pill</span>
                            </div>
                            <div className="order_confirmation_product_sub">
                                <span>Qauntity </span>
                                <span className='info_detail'>1</span>
                            </div>
                            <div className="order_confirmation_product_sub">
                                <span>Price </span>
                                <span className='info_detail'>1200 ֏</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='main_btn'>Buy Again</button>
            </div>
        </div>
    );
};

export default OrderItem;