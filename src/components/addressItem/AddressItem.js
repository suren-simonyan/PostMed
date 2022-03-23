import React from 'react';
import './style.scss';
import CustomRadio from '../../helpers/customRadio/CustomRadio';

const AddressItem = ({ branch, bankCard, bankName, selected, ...rest }) => {

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
            ) : branch === 'bankCard' ? (
                <>
                    <h5 className='bank_card'>
                        {bankCard === 'visa' ? (
                            <i className="icon-visa"></i>
                        ) : bankCard === 'master' ? (
                            <i className="icon-master"></i>
                        ) : (
                            <i className="icon-master"></i>
                        )}
                        <strong>{bankName}</strong>
                    </h5>
                    <p><strong>4345 **** **** 5050</strong></p>
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
                    labelName={branch}
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
