import React from 'react';

const BagSummery = ({ showButton }) => {
    return (
        <div className='bag_summery'>
            <h4>Summery</h4>
            <div className='bag_summery_item'>
                <span>Items(3 item)</span>
                <span className='gab_summery_price'>3600 ֏</span>
            </div>
            <div className='bag_summery_item'>
                <span>Discount</span>
                <span className='gab_summery_price'>-1200 ֏</span>
            </div>
            <div className='bag_summery_item'>
                <span>Shipping</span>
                <span className='gab_summery_price'>1200 ֏</span>
            </div>
            <div className="bag_summery_total">
                <span>Order Total</span>
                <span className="bag_summery_total_price">1200 ֏ </span>
            </div>

            { showButton && <button className="main_btn">Checkout</button> }
            
        </div>
    );
};

export default BagSummery;