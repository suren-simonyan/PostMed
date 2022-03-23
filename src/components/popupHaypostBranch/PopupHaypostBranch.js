import React from 'react';
import './style.scss';
import CustomSelect from '../../helpers/customSelect/CustomSelect';

const PopupHaypostBranch = ({ openHaypostBranch, setOpenHaypostBranch }) => {

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
        <div className={`popup_add_haypost_branch_wrap ${openHaypostBranch ? "opened" : ""}`}>
            <div className="popup_add_haypost_branch">
                <i
                    className="icon-Close"
                    onClick={() => setOpenHaypostBranch(false)}
                >
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
                <h5>Add Haypost branch</h5>

                <CustomSelect infoData={infodata} title="Region" />
                <CustomSelect infoData={infodata} title="Haypost branch" />

                <button className="btn_main">Add</button>

            </div>
        </div>
    );
};

export default PopupHaypostBranch;