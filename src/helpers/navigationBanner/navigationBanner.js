import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

export default function NavigationBanner({ nav }) {
    return (
        <nav className="navigation-banner">
            <div>
                {
                    nav.map((el, i) => (
                        i != nav.length - 1 ? <React.Fragment key={i}>
                            <Link to="/">{el}</Link>
                            <span>/</span>
                        </React.Fragment> : <Link to="/" key={i}>{el}</Link>
                    ))
                }
            </div>
        </nav>
    )
}