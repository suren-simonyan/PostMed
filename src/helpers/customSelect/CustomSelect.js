import React, { useState } from 'react';
import './style.scss'

const CustomSelect = ({ title, infoData }) => {
    const [searchBranch, setSearchBranch] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className='custom_select'>
            <div className={`custom_select_inner ${searchBranch ? "active" : ""}`}>
                <span>{ title }</span>
                <input
                    type="text"
                    value={searchBranch}
                    onChange={(e) => setSearchBranch(e.target.value)}
                />
                <i
                    className="icon-arrow-down-alt"
                    onClick={() => setOpen(!open)}
                ></i>
            </div>
            <div className={`custom_select_info ${open ? "open" : ""}`}>
                {infoData.map((item) => (
                    <span key={item.id}>{ item.info }</span>
                ))}
            </div>
        </div>
    );
};

export default CustomSelect;