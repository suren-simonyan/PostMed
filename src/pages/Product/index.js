import NavigationBanner from "../../helpers/navigationBanner";
import "./style.scss";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel } from "@mui/material";

import { arr3 } from "../HomePage";


const nav = ["Home", "page-2", "page-3", "this page"]
export default function Products() {
    return (
        <main className="products-page">
            <NavigationBanner
                nav={nav}
            />
            <section className="products-page-section">
                <div className="products-into">
                    <h2>Flu Medicine</h2>
                    <span>42 products</span>
                </div>
                <div className="products">
                    <div className="products-filters">
                        <Accordion
                            defaultExpanded={true}
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
                        <Accordion
                            defaultExpanded={true}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="item-container">
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="CVS Health"
                                    />
                                    <span>
                                        (0)
                                    </span>
                                </div>
                                <div className="item-container">
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="CVS Health"
                                    />
                                    <span>
                                        (8)
                                    </span>
                                </div>
                                <div className="item-container">
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="CVS Health"
                                    />
                                    <span>
                                        (6)
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
                    </div>
                    <div className="products-list">
                        <div className="sort-by">
                            <p>High to Low</p>
                            <ExpandMoreIcon />
                        </div>
                        <div className="products-container">
                            {
                                arr3.map((el, i) => (
                                    <div
                                        className="product"
                                        key={i}
                                    >
                                        <div
                                            className="product-item"
                                        // className={!(i % 2) ? "product-item" : "product-item opacity-5"}
                                        >
                                            <div className="product-img-area">
                                                <img src={el} />
                                            </div>
                                        </div>
                                        <div
                                            className="product-discription"
                                        // className={!(i % 2) ? "product-discription" : "product-discription opacity-5"}
                                        >
                                            <p className="item-name" >Magnidoz</p>
                                            <p className="item-size">120 mg/5 ml</p>
                                            <p className="item-price">
                                                <span className="price">1200 ֏</span>
                                                <span className="sale-price">2000 ֏</span>
                                            </p>
                                            <div>
                                                <button className="item-btn">item</button>
                                                <button className="pack-btn">Pack</button>
                                            </div>
                                            {/* <p className="out-of-stock">out-of-stock</p> */}
                                        </div>
                                        <button>Add to Cart</button>
                                    </div>
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