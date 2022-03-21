import { Link } from "react-router-dom";
import React, { Component } from "react";
import Slider from "react-slick";
import "./style.scss";


export default function SliderOne({ props }) {
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
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.4,
                    arrows: false
                }
            },
            // {
            //     breakpoint: 580,
            //     settings: {
            //         slidesToShow: 3,
            //         arrows: false
            //     }
            // },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.4,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="slider slider-1">
            <div className="title">
                <h2> Slider-1 </h2>
                <p>Show All</p>
            </div>
            <Slider {...settings}>
                {
                    props.map((el, index) => (
                        <Link key={index} to="/product">
                            <div className="slide-item-1">
                                <p>Allergies</p>
                                <div className="slick-slide-1-img-area">
                                    <img src={el} />
                                </div>
                            </div>
                        </Link>

                    ))
                }

            </Slider>
        </div>
    );
}