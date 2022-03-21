import React from 'react';
import CustomRadio from '../../helpers/customRadio/CustomRadio';
import './style.scss';

const AddItem = ({ addItemTitle, cardIcon, hasCheckBox }) => {
    return (
        <article className='add_item'>
            {cardIcon ? (
                <i className={`additem_icon ${cardIcon}`}></i>
            ) : (
                <i className="icon-Plus"></i>
            )}  
            {hasCheckBox ? (
                <CustomRadio radioTitle={addItemTitle} />
            ) : (
                <span>{ addItemTitle }</span>
            )}          
        </article>
    );
};

export default AddItem;
