import React, { useState } from 'react';
import './style.scss'

const CustomSelect = () => {
    const [searchBranch, setSearchBranch] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className='custom_select'>
            <div className={`custom_select_inner ${searchBranch ? "active" : ""}`}>
                <span>Haypost branch</span>
                <input
                    type="text"
                    value={searchBranch}
                    onChange={(e) => setSearchBranch(e.target.value)}
                />
                <i
                    class="icon-arrow-down-alt"
                    onClick={() => setOpen(!open)}
                ></i>
            </div>
            <div className={`custom_select_info ${open ? "open" : ""}`}>
                <span>0001 Նալբանդյան 21</span>
                <span>0001 Նալբանդյան 21</span>
                <span>0001 Նալբանդյան 21</span>
            </div>
        </div>
    );
};

export default CustomSelect;