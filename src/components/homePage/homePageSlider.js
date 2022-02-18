import Slider from "react-slick";
import "./style.scss"

export default function HomepageSlider({ props }) {
    var settings = {
        // dots: true,
        infinite: false,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // responsive: [
        //     {
        //         breakpoint: 1921,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     },
        // ]
    };

    let arr = [1, 1, 1, 1, 4]

    return (
        <div className="homePage-slider-banner">
            <Slider {...settings}>
                {
                    arr.map((el, i) => (
                        <div key={i}>
                            <div className="home-page-banner-bgi"
                                style={{ backgroundImage: `url(${props.image})` }}
                            >
                                {/* <img src={props.image} /> */}
                                <div className="banner-texes">
                                    <p className="banner-mid-text">Extra 20% off $40+</p>
                                    <p className="banner-text">Healthy for the holidays</p>
                                    <button className="baner-shop-now">
                                        <span>
                                            shop now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </Slider>
        </div>
    )
}