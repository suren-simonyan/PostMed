import NavigationBanner from "../../helpers/navigationBanner/navigationBanner";
import "./style.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel } from "@mui/material";


import { arr3 } from "../HomePage";
import MobileFiltersButtonSvgIcon from "../../resourses/icons/MobileFiltersButtonSvgIcon";
import ShippingBanner from "../../helpers/navigationBanner/ShippingBanner";
import { useEffect, useRef, useState } from "react";
import { MusicOffOutlined } from "@mui/icons-material";
import ProductItem from "../../components/product/ProductItem";


const nav = ["Home", "page-2", "page-3", "this page"]
export default function Products() {
    const filterButtonsRef = useRef(null)
    const [state, setstate] = useState(0)

    window.onscroll = function () {
        const filter = document.querySelector(".filter-for-fix");

        if (window.pageYOffset > 305) {
            filter.classList.add('fixed-filter');

            if ((document.body.offsetHeight - (window.pageYOffset + window.innerHeight)) <= document.querySelector("footer").offsetHeight) {
                filter.classList.remove('fixed-filter');
                filter.classList.add('last-filter');
                filterButtonsRef.current.classList.add("fiter-buttonst-fix")
            } else {
                filter.classList.remove('last-filter');
                filterButtonsRef.current.classList.remove("fiter-buttonst-fix")

            }
        }
        else {
            filter.classList.remove('fixed-filter');
        }
    }


    const sorts = [1, 1, 1, 1, 1]
    const accordions = sorts
    const [sortBy, setSortBy] = useState(0)

    return (
        <main className="products-page">
            <ShippingBanner />
            {/* <NavigationBanner
                nav={nav}
            /> */}
            <section className="products-page-section">
                <div className="products-into">
                    <h2>Flu Medicine</h2>
                    <span>42 products</span>
                </div>
                <div className="products">
                    <div className="filter-for-fix-wrap">
                        <div className="filter-for-fix">
                            <div className="products-filters">
                                <div className="product-sorting">
                                    <h2>Cough, Cold & Flue</h2>
                                    {sorts.map((el, i) => (
                                        <p key={i}
                                            onClick={() => { setSortBy(i) }}
                                            className={sortBy === i ? "active" : ""}
                                        >
                                            Flu Medicine
                                        </p>
                                    ))}
                                </div>
                                {accordions.map((el, i) => (
                                    <Accordion
                                        defaultExpanded={true}
                                        key={i}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Accordion 1</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className="item-container">
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="CVS Health"
                                                />
                                                <span>
                                                    (12)
                                                </span>
                                            </div>
                                            <div className="item-container">
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="CVS Health"
                                                />
                                                <span>
                                                    (12)
                                                </span>
                                            </div>
                                            <div className="item-container">
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="CVS Health"
                                                />
                                                <span>
                                                    (12)
                                                </span>
                                            </div>
                                            <div className="item-container">
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="CVS Health"
                                                />
                                                <span>
                                                    (12)
                                                </span>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>

                                ))}

                                <nav
                                    ref={filterButtonsRef}
                                    className="filter-buttons">
                                    <button className="cancel-button">
                                        Cancel
                                    </button>
                                    <button className="apply-button">
                                        Apply
                                    </button>
                                </nav>

                            </div>
                        </div>
                    </div>

                    <div className="products-list">
                        <div className="sort-by">
                            <div>
                                <p>High to Low</p>
                                <ExpandMoreIcon />
                            </div>
                            <button>
                                <MobileFiltersButtonSvgIcon />
                            </button>
                        </div>
                        <div className="products-container">
                            {
                                arr3.map((el, i) => (
                                    <ProductItem
                                        el={el}
                                        key={i}
                                    />
                                ))
                            }
                        </div>
                        <div className="viewed-products">
                            <p>you've viewed 64 of 89 products</p>
                            <div className="all-products">
                                <span className="viewed-products-procent"></span>
                            </div>
                            <button className="view-more-products">view more</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}