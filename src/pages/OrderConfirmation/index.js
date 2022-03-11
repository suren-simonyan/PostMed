import React, { useState } from 'react';
import './style.scss';
import productImg from '../../resourses/images/medicineImg1.png'
import useWindowSize from '../../hooks/useWindowSize';
import SliderTwo from '../../helpers/sliders/SliderTwo';

import img1 from "../../resourses/images/slickSlideImg.png";
import img2 from "../../resourses/images/slickSlideImg2.png";
import img3 from "../../resourses/images/slickSlideImg3.png";

import img4 from "../../resourses/images/[Downloader 5.png";
import img5 from "../../resourses/images/[Downloader 4.png";
import img6 from "../../resourses/images/[Downloader 1.png";

import img7 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (2).png";
import img8 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (1).png";
import img9 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1.png";

export const arr3 = [img7, img8, img9, img8, img7, img9, img8, img9, img7,]


const OrderConfirmation = () => {
    const [showHide, setShowHide] = useState(false);
    const size = useWindowSize();

    return (
        <section className='order_confirmation'>
            <h1>
                <i className="icon-checked-alt"></i>
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
                            <i className="icon-Printer">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </span>
                    </h2>
                    <time dateTime="11-10-2021">11.10.2021</time>
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
                    {size.width < 768 &&
                        <div className="mobile_deliver_status">
                            <h5>Statuses</h5>
                            <div className="mobile_deliver_status_sub">
                                <time>11.10.2021</time>
                                <i className="icon-checked-alt prev_status"></i>
                                <span className='deliver_verified'>Verified</span>
                            </div>
                            <div className="mobile_deliver_status_sub">
                                <time>12.10.2021</time>
                                <i className="icon-checked-field">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                                <span className='deliver_inprocess'>In Process</span>
                            </div>
                        </div>
                    }


                </div>
                <span
                    className={`order_confirm_show_hide ${showHide ? "show" : "hide"}`}
                    onClick={() => setShowHide(!showHide)}
                >
                    {showHide ? "hide " : "show "}
                    Order Details

                    <i className="icon-back"></i>
                </span>
            </div>

            <SliderTwo props={arr3} />

        </section>
    );
};

export default OrderConfirmation;