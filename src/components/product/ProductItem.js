import { useState } from "react"
import HeartActiveSvgIcon from "../../resourses/icons/HeartActiveSvgIcon"
import HeartSvgIcon from "../../resourses/icons/HeartSvgIcon"
import "./style.scss"

export default function ProductItem({ el, wish }) {

    return (
        <div
            className="product"
        >
            <div
                className="product-item"
            // className={!(i % 2) ? "product-item" : "product-item opacity-5"}
            >
                <div className="product-img-area">
                    <img src={el} />
                </div>
                <div className= {!wish? "product-item-heart" : "product-item-heart wished"}
                    // onClick={()=>{setWish(!wish)}}
                >
                    {wish ? <HeartActiveSvgIcon/> : <HeartSvgIcon />}
                </div>
            </div>
            <div
                className="product-discription"
            // className={!(i % 2) ? "product-discription" : "product-discription opacity-5"}
            >
                <p className="item-first-name">Apotex</p>
                <div className="item-discription">
                    <p className="item-name" >Magnidoz</p>
                    <p className="item-size">120 mg/5 ml</p>
                </div>
                <p className="item-format">Ampule</p>
                <p className="item-price">
                    <span className="price">1200 ֏</span>
                    <span className="sale-price">2000 ֏</span>
                </p>
                <div className="item-buttons">
                    <div>
                        <button className="item-btn">item</button>
                        <button className="pack-btn">Pack</button>
                    </div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>


                {/* <p className="out-of-stock">out-of-stock</p> */}
            </div>
        </div>
    )
}