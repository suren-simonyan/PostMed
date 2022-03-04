import React from 'react';
import Slider from "react-slick";
import imageSlide from '../../resourses/images/medicineImg1.png';
import './ProductSlider.scss';

const ProductSlider = () => {
    const imgArr = [imageSlide, imageSlide, imageSlide, imageSlide];

    const settings = {
        customPaging: function (i) {
            return (
                <span className='product_slider_thumb'>
                    <img src={imgArr[i]} />
                </span>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div className='product_slider'>
            <Slider {...settings}>
                {imgArr.map((item, index) => (
                    <div className='slider_img_wrap'>
                        <img src={item} key={index} />
                    </div>
                )
                )}

            </Slider>
        </div>
    );
};

export default ProductSlider;