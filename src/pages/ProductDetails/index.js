import HomePageBanner from "../../components/homePage/HomePageBanner";
import NavigationBanner from "../../helpers/navigationBanner";
import SliderTwo from "../../helpers/sliders/SliderTwo";
import img from "../../resourses/images/homePageBanner.png";
import { arr3 } from "../HomePage";
import "./style.scss"
import img1 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1.png"
import img2 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (1).png"
import img3 from "../../resourses/images/70ea37567c320595d458002507b84b3bff6a977e29eebb982c797ebee734eeab 1 (2).png"
import { useState } from "react";


export default function ProductDetails() {
    const images =[img1, img2, img3]
    const [activeImg, setActiveImg] = useState(img1)
    return(
        <main className="product-details">
            <NavigationBanner
                nav={["Home", "Cough", "Cold", "this page"]}
            />
            <section className="product-info-section">
                <div className="product-info">
                    <div className="product-images">
                        <div className="active-img-area">
                            <img src={activeImg}/>
                        </div>
                        <div className="alt-images">
                            {
                                images.map((el, i)=>(
                                    <div 
                                        className={activeImg == el ? "img active" : "img"}
                                    >
                                        <img src={el} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <SliderTwo props={arr3}/>
            </section>
            <HomePageBanner
                props={{image:img}}
            />
            <section className="product-slider-section">
            <SliderTwo props={arr3}/>

            </section>
        </main>
    )
}