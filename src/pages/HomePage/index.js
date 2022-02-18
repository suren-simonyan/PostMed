import HomePageBanner from "../../components/homePage/HomePageBanner";
import SliderOne from "../../helpers/sliders/SliderOne";
import SliderTwo from "../../helpers/sliders/SliderTwo";
import img from "../../resourses/images/homePageBanner.png";
import AffordableSvgIcon from "../../resourses/icons/AffordableSvgIcon";
import TimeSvgIcon from "../../resourses/icons/TimeSvgIcon";
import ConvenientSvgIcon from "../../resourses/icons/ConvenientSvgIcon";
import ShippingBanner from "../../helpers/navigationBanner/ShippingBanner"
import "./style.scss"

import boxImg from "../../resourses/images/box photo 1.png";

import img1 from "../../resourses/images/slickSlideImg.png";
import img2 from "../../resourses/images/slickSlideImg2.png";
import img3 from "../../resourses/images/slickSlideImg3.png";

import img4 from "../../resourses/images/[Downloader 5.png";
import img5 from "../../resourses/images/[Downloader 4.png";
import img6 from "../../resourses/images/[Downloader 1.png";

import img7 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (2).png";
import img8 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (1).png";
import img9 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1.png";
import HomepageSlider from "../../components/homePage/homePageSlider";


const arr1 = [img1, img2, img3, img1, img2, img3, img1, img2, img3];
const arr2 = [img4, img5, img6, img4, img5, img6, img4, img5, img6,];
export const arr3 = [img7, img8, img9, img8, img7, img9, img8, img9, img7,]

export default function HomePage() {
    return (
        <main className="home-page">
            <ShippingBanner/>
            <HomepageSlider props={{ image: img }}/>
            {/* <HomePageBanner props={{ image: img }} /> */}
            <section className="home-page-section">
                <SliderOne props={arr1} />
                <div className="home-page-box-container">
                    <p className="title">Get the Care You Deserve at a Price You’ll Love</p>
                    <div className="home-page-box">
                        <div className="box-left">
                            <div className="item">
                                <div>
                                    <AffordableSvgIcon />
                                </div>
                                <div >
                                    <p className="subtitle">Affordable</p>
                                    <p className="text">We save you thousands each year on prescription medications and on online doctor visits.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <TimeSvgIcon />
                                </div>
                                <div >
                                    <p className="subtitle">Affordable</p>
                                    <p className="text">We save you thousands each year on prescription medications and on online doctor visits.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div>
                                    <ConvenientSvgIcon />
                                </div>
                                <div >
                                    <p className="subtitle">Affordable</p>
                                    <p className="text">We save you thousands each year on prescription medications and on online doctor visits.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="box-img-area">
                            <img src={boxImg} />
                        </div>
                    </div>
                </div>
                <SliderOne props={arr2} />

                <SliderTwo props={arr3} />
                <SliderTwo props={arr3.reverse()} />
            </section>
        </main>
    )
}