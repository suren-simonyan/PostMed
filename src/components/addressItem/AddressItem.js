import React, { useState } from 'react';
import './style.scss';
import CustomRadio from '../../helpers/customRadio/CustomRadio';

const AddressItem = ({ branch, selected,...rest }) => {
    

    return (
        <article
            className={`address_item ${selected ? "address_selected" : ""}`}
            {...rest}
        >
            {branch === 'post' ? (
                <>
                    <h5>
                        <i className="icon-Branch">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                        <strong>Haypost brach 1</strong>
                    </h5>
                    <p><strong>0002</strong>Yerevan, Saryan 22</p>
                </>
            ) : (
                <>
                    <h5>
                        <i className="icon-Home-alt">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                        <strong>Home Adress 1</strong>
                    </h5>
                    <p>Yerevan, Saryan 22</p>
                </>
            )}
            <div className="address_item_choosel_del">
                <CustomRadio
                    labelName={ branch }
                    radioTitle="Default"
                    checked={selected}
                />
                <i className="icon-Garbage">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
            </div>
        </article>
    );
};

export default AddressItem;
