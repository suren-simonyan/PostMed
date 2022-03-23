import React, { useState } from 'react';
import './style.scss';
import CustomSelect from '../../helpers/customSelect/CustomSelect';
import CustomRadio from '../../helpers/customRadio/CustomRadio';
import CustomInput from '../../helpers/customInput/CustomInput';

const popupAddHomeAddress = ({ openAddress, setOpenAddress }) => {

    const infodata = [
        {
            id: 1,
            info: "0001 Նալբանդյան 21",
        },
        {
            id: 2,
            info: "0001 Նալբանդյան 21",
        },
        {
            id: 3,
            info: "0001 Նալբանդյան 21",
        },
    ];

    return (
        <div className={`popup_add_home_address_wrap ${openAddress ? "opened" : ""}`}>
            <div className='popup_add_home_address'>
                <i 
                className="icon-Close"
                onClick={() => setOpenAddress(false)}
                >
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
                <h5>Add home adress</h5>

                <CustomSelect infoData={infodata} title="Region" />
                <CustomSelect infoData={infodata} title="City" />
                <CustomSelect infoData={infodata} title="Street" />

                <div className='popup_appartament_house'>
                    <CustomRadio radioTitle="Apartment" labelName="popup_appartament_house" checked={true} />
                    <CustomRadio radioTitle="House" labelName="popup_appartament_house" checked={false} />
                </div>

                <div className="popup_bulding_appartament">
                    <CustomInput inputTitle="Bulidng" inputType="text" />
                    <CustomInput inputTitle="Appartment" inputType="text" />
                </div>

                <button className="btn_main">Add</button>

            </div>
        </div>
    );
};

export default popupAddHomeAddress;