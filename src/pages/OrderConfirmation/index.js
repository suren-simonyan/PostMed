import React, { useState } from 'react';
import './style.scss';
import productImg from '../../resourses/images/medicineImg1.png'


const OrderConfirmation = () => {
    const [showHide, setShowHide] = useState(false);

    return (
        <section className='order_confirmation'>
            <h1>
                <i class="icon-checked-alt"></i>
                Thank you for your order!
            </h1>
            <p>We sent an email to
                <strong>ArmenSargsyan@president.am</strong>
                <span>With Your order confirmation and recipent</span>
            </p>

            <div className="order_confirmation_info_wrap">
                <div className="order_confirmation_info_top">
                    <h2>
                        <span>Order ID</span>
                        <span>637433
                            <i class="icon-Printer">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                        </span>
                    </h2>
                    <time datetime="11-10-2021">11.10.2021</time>
                </div>
                <div className={`order_confirmation_info ${showHide ? "show_info" : ""}`}>
                    <div className="order_confirmation_total_status">
                        <span className='order_confirmation_info_total'>Total <span>1200</span></span>
                        <span className='order_confirmation_info_status'>Status <span>In Process</span></span>
                    </div>
                    <div className="order_confirmation_info_sub">
                        <h5>Recipent</h5>
                        <div className="order_confirmation_info_inner">
                            <span>Recipent</span>
                            <span className='info_text'>Armen Sargsyan</span>
                        </div>
                        <div className="order_confirmation_info_inner">
                            <span>Phone number</span>
                            <span className='info_text'>+37433044433</span>
                        </div>
                        <div className="order_confirmation_info_inner">
                            <span>Email</span>
                            <span className='info_text'>ArmenSargsyan@president.am</span>
                        </div>
                    </div>
                    <div className="order_confirmation_info_sub">
                        <h5>Address</h5>
                        <div className="order_confirmation_info_inner">
                            <span>Delivery method</span>
                            <span className='info_text'>Home Delivery</span>
                        </div>
                        <div className="order_confirmation_info_inner">
                            <span>Address</span>
                            <span className='info_text'>Yerevan, Baghramyan 26 </span>
                        </div>
                        <div className="order_confirmation_info_inner order_confirmation_payment">
                            <span><strong>Payment method</strong></span>
                            <span className='info_text'>Bank Card Payed</span>
                        </div>
                    </div>
                    <div className="order_confirmation_product_wrap">
                        <h5>Products</h5>
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
                </div>
                <span
                    className={`order_confirm_show_hide ${showHide ? "show" : "hide"}`}
                    onClick={() => setShowHide(!showHide)}
                >
                    {showHide ? "hide " : "show "}
                    Order Details

                    <i class="icon-back"></i>
                </span>
            </div>

        </section>
    );
};

export default OrderConfirmation;