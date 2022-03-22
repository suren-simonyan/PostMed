import React from 'react';
import './style.scss';

const index = () => {
    return (
        <div className='modal_pages'>
            <div className="modal_inner">
                <h5 className='modal_title_center'>
                    <i className="icon-Email">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                    </i>
                    Email sent
                </h5>
                <p>An verification mail has been sent to 
                    <strong> ArmenSargsyan@president.am </strong> further
                    instractions.</p>
            </div>
        </div>
    );
};

export default index;
