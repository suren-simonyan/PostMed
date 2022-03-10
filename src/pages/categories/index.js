import React from 'react';
import CategoriesFilter from './CategoriesFilter/CategoriesFilter';
import './style.scss';

const CategoriesProducts = () => {
    return (
        <section className='categories'>
            <div className="categories_filter">
                <CategoriesFilter filterTitle="Brand" />
            </div>
            <div className="categories_products">
                </div>
        </section>
    );
};

export default CategoriesProducts;