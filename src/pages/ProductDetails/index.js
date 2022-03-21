import HomePageBanner from "../../components/homePage/HomePageBanner";
import NavigationBanner from "../../helpers/navigationBanner/navigationBanner";
import SliderTwo from "../../helpers/sliders/SliderTwo";
import img from "../../resourses/images/homePageBanner.png";
import { arr3 } from "../HomePage";
import "./style.scss"
import img1 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1.png"
import img2 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (1).png"
import img3 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (2).png"
import { useState } from "react";
import ProductSlider from "../../components/productSlider/ProductSlider";
import CounterProduct from "../../helpers/counterProduct/CounterProduct";


export default function ProductDetails() {
    const images = [img1, img2, img3];
    const [activeImg, setActiveImg] = useState(img1);
    const [count, setCount] = useState(1);

    return (
        <main className="product-details">
            {/* <NavigationBanner
                nav={["Home", "Cough", "Cold", "this page"]}
            /> */}
            <section className="product-info-section">
                <a className="mobile_back" href="#">Flu Medicine</a>
                <section className="product_top_info">
                    <ProductSlider />
                    <div className="product_detail_info">
                        <div className="product_info_inner product_left_inner">
                            <div className="product_title_desc">
                                <h1>Magnidoz</h1>
                                <h2>Flu Medicine</h2>
                                <p>Item #234234</p>
                            </div>
                            <div className="product_main_info">
                                <div className="product_info_sub">
                                    <div className="product_info_icon">
                                        <i className="icon-Address"></i>
                                    </div>
                                    <div className="product_info_text">
                                        <span>Based in</span>
                                        <h6>Israel</h6>
                                    </div>
                                </div>
                                <div className="product_info_sub">
                                    <div className="product_info_icon">
                                        <i className="icon-Box"></i>
                                    </div>
                                    <div className="product_info_text">
                                        <span>Manufacturer</span>
                                        <h6>Teva</h6>
                                    </div>
                                </div>
                                <div className="product_info_sub">
                                    <div className="product_info_icon">
                                        <i className="icon-Location"></i>
                                    </div>
                                    <div className="product_info_text">
                                        <span>Quantity in the Pack</span>
                                        <h6>30 Pill</h6>
                                    </div>
                                </div>
                                <div className="product_info_sub">
                                    <div className="product_info_icon">
                                        <i className="icon-Pills"></i>
                                    </div>
                                    <div className="product_info_text">
                                        <span>Form</span>
                                        <h6>Pill</h6>
                                    </div>
                                </div>

                                <form className="download_description">
                                    <input type="file" id="upload" hidden />
                                    <label for="upload">
                                        <i className="icon-Download">
                                            <span className="path1"></span>
                                            <span className="path2"></span>
                                            <span className="path3"></span>
                                        </i>
                                        Download Desribtion (pdf)
                                    </label>
                                </form>
                            </div>
                        </div>

                        <div className="product_info_inner product_right_inner">
                            <div className="product_price">
                                <span className="new_price">1200 ֏</span>
                                <span className="old_price">2000 ֏</span>
                            </div>
                            <div className="product_strenght">
                                <h6>Strenght</h6>
                                <div className="product_strenght_inner">
                                    <button className="prod_info_btn selected">10mg</button>
                                    <button className="prod_info_btn">20mg</button>
                                </div>
                            </div>
                            <div className="product_type">
                                <h6>Type</h6>
                                <div className="product_type_inner">
                                    <div className="product_type_inner_btn">
                                        <button className="prod_info_btn selected">item</button>
                                        <button className="prod_info_btn">Pack</button>
                                    </div>
                                    <CounterProduct count={count} setCount={setCount} />
                                </div>
                            </div>
                            <div className="product_add_card">
                                <button className="btn_main">Add to Card</button>
                                <i className="icon-Heart">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </div>
                        </div>

                    </div>
                </section>
                <SliderTwo props={arr3} />
            </section>
            <HomePageBanner
                props={{ image: img }}
            />
            <section className="product-slider-section">
                <SliderTwo props={arr3} />

            </section>
        </main>
    )
}