import React from 'react';
import './CounterProduct.scss';

const CounterProduct = ({ count, changeCount }) => {
    return (
        <div className='product_counter'>
            <button className="counter_btn" onClick={() => changeCount(count - 1)}>-</button>
            <input type="number" value={count} />
            <button className="counter_btn" onClick={() => changeCount(count + 1)}>+</button>
        </div>
    );
};

export default CounterProduct;