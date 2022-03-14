import React from 'react';
import './style.scss';

const AddItem = ({ addItemTitle }) => {
    return (
        <article className='add_item'>
            <i className="icon-Plus"></i>
            <span>{ addItemTitle }</span>
        </article>
    );
};

export default AddItem;
