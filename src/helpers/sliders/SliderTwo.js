import { Link } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";



export default function SliderTwo({ props }) {

    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    arrows: false
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.3,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="slider slider-2">
            <div className="title">
                <h2> Slider-2 </h2>
                <p>Show All</p>
            </div>
            <Slider {...settings}>
                {
                    props.map((el, index) => (
                        <React.Fragment key={index}>
                            <div className="slide-item-2">
                                <div className="slick-slide-2-img-area">
                                    <Link to="/product">
                                        <img src={el} />
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-2-discription">
                                <p className="item-name" >Magnidoz</p>
                                <p className="item-size">120 mg/5 ml</p>
                                <p className="item-price">
                                    <span className="price">1200 ֏</span>
                                    <span className="sale-price">2000 ֏</span>
                                </p>
                                <div>
                                    <button className="item-btn">item</button>
                                    <button className="pack-btn">Pack</button>
                                </div>
                                <button>Add to Cart</button>
                            </div>
                        </React.Fragment>
                    ))
                }

            </Slider>
        </div>
    );
}