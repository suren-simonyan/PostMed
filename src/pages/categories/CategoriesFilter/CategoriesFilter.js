import React from 'react';
import CustomCheckbox from '../../../helpers/CustomCheckbox/Checkbox';
import './style.scss';

const CategoriesFilter = ({ filterTitle }) => {
    return (
        <section className='categories_filter'>
            <h4 className='categories_filter_title'>{ filterTitle }</h4>

            <div className="filter_item_wrap">
                <div className="filter_item">
                    <CustomCheckbox productName="CVS Health" />
                    <span className='filter_item_count'>(12)</span>
                </div>
                <div className="filter_item">
                    <CustomCheckbox productName="Vicks" />
                    <span className='filter_item_count'>(12)</span>
                </div>
                <div className="filter_item">
                    <CustomCheckbox productName="Cetamol" />
                    <span className='filter_item_count'>(12)</span>
                </div>
            </div>
        </section>
    );
};

export default CategoriesFilter;