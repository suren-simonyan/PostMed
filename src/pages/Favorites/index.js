import React from 'react';
import ProductItem from '../../components/product/ProductItem';
import productImg from '../../resourses/images/medicineImg1.png';
import './style.scss';

const Favorites = () => {
    const favArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <section className='favorites'>
            <h1>Favorites</h1>
            <div className="favorites_items">
                {favArr && favArr.length > 0 ? (favArr.map((item) => (
                    <ProductItem
                        key={item}
                        el={productImg}
                        wish={true}
                    />
                ))
                ) : (
                    <h2>No Favorite Item</h2>
                )}
            </div>
            <div className="favorites_pagination">
                <span className='prev inactive'>
                    <i className="icon-back"></i>
                </span>
                <span className='selected'>1</span>
                <span>2</span>
                <span>3</span>
                <span className='next'>
                    <i className="icon-back"></i>
                </span>
            </div>
        </section>
    );
};

export default Favorites;