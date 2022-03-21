import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs  from 'use-react-router-breadcrumbs';
import './style.scss';

const BreadCrumbs = () => {

    const breadcrumbs = useBreadcrumbs();

    console.log(breadcrumbs);

    return (
        <div className='breadcrumbs_wrap'>
            <div className="breadcrumbs">
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <Link to={match.pathname} key={match.pathname}>{breadcrumb}</Link> 
                ) )}
            </div>
        </div>
    );
};

export default BreadCrumbs;