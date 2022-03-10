import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "../../resourses/icons/CloseIcon";
import BurgerSvgIcon from "../../resourses/icons/BurgerSvgIcon";
import MedicineSvgIcon from "../../resourses/icons/MedicineSvgIcon";
import ArrowRight from "../../resourses/icons/ArrowRight";
import img1 from "../../resourses/images/medicineImg1.png"
import img2 from "../../resourses/images/medicineImg2.png"
import { Link } from "react-router-dom";


const categoryesData = [
    {
        title: "Category 1",
        icon: MedicineSvgIcon,
        subCategoryes: [
            {
                title: "category 1.1",
                children: ["category 1.1.1", "category 1.1.2", "category 1.1.3",]
            },
            {
                title: "category 1.2",
                children: ["category 1.2.1", "category 1.2.2", "category 1.2.3",]
            },
            {
                title: "category 1.3",
                children: ["category 1.3.1", "category 1.3.2", "category 1.3.3",]
            },
        ],
        image: img1
    },
    {
        title: "Category 2",
        icon: MedicineSvgIcon,
        subCategoryes: [
            {
                title: "category 2.1",
                children: ["category 2.1.1", "category 2.1.2", "category 2.1.3",]
            },
            {
                title: "category 2.2",
                children: ["category 2.2.1", "category 2.2.2", "category 2.2.3",]
            },
            {
                title: "category 2.3",
                children: ["category 2.3.1", "category 2.3.2", "category 2.3.3",]
            },
        ],
        image: img2
    },
    {
        title: "Category 3",
        icon: MedicineSvgIcon,
        subCategoryes: [
            {
                title: "category 3.1",
                children: ["category 3.1.1", "category 3.1.2", "category 3.1.3",]
            },
            {
                title: "category 3.2",
                children: ["category 3.2.1", "category 3.2.2", "category 3.2.3",]
            },
            {
                title: "category 3.3",
                children: ["category 3.3.1", "category 3.3.2", "category 3.3.3",]
            },
        ],
        image: img1
    },
    {
        title: "Category 4",
        icon: MedicineSvgIcon,
        subCategoryes: [
            {
                title: "category 4.1",
                children: ["category 4.1.1", "category 4.1.2", "category 4.1.3",]
            },
            {
                title: "category 4.2",
                children: ["category 4.2.1", "category 4.2.2", "category 4.2.3",]
            },
            {
                title: "category 4.3",
                children: ["category 4.3.1", "category 4.3.2", "category 4.3.3",]
            },
        ],
        image: img2
    },
    {
        title: "Category 5",
        icon: MedicineSvgIcon,
        subCategoryes: [
            {
                title: "category 5.1",
                children: ["category 5.1.1", "category 5.1.2", "category 5.1.3",]
            },
            {
                title: "category 5.2",
                children: ["category 5.2.1", "category 5.2.2", "category 5.2.3",]
            },
            {
                title: "category 5.3",
                children: ["category 5.3.1", "category 5.3.2", "category 5.3.3",]
            },
        ],
        image: img1
    },
]

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export default function HeaderMenu({ open, setOpen }) {
    const [activeCategory, setActiveCategory] = useState(categoryesData[0])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="header-menu">
            <div
                onClick={() => { setOpen(true) }}
                className="header-burger">
                <BurgerSvgIcon />
            </div>
            {
                open && <div
                    onClick={handleClose}
                    className="header-menu-close-icon">
                    <CloseIcon color={false} />
                </div>
            }
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className="header-menu-dialog"
            >
                <div className="header-menu-categoryes">
                    <ul>
                        {
                            categoryesData.map((item, index) => {
                                return (
                                    <li className={activeCategory.title == item.title ? 'active' : ""}
                                        onClick={() => {
                                            let selected = categoryesData.find(el => el.title === item.title);
                                            setActiveCategory(selected)
                                        }}
                                        key={index}>
                                        <div>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </div>
                                        <ArrowRight />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="header-menu-subcategoryes">
                    <div className="header-menu-active-subcategory">
                        {
                            activeCategory.subCategoryes.map((item, index) => {
                                return (
                                    <div 
                                    className="header-menu-active-subcategoryes-item"
                                    key={index}>
                                        <div className="header-menu-active-subcategoryes-title" >
                                            <p>{item.title}</p>
                                        </div>
                                        {
                                            item.children.map((el, i) => {
                                                return (
                                                    <Link to="/products" 
                                                    className="header-menu-active-subSubcategories"
                                                    key={i}>
                                                        {el}
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="header-menu-acive-subategory-view">
                        <div>
                            <img src={activeCategory.image}/>
                        </div>
                        <p>{activeCategory.title}</p>
                    </div>
                </div>

            </Dialog>
        </div>
    )
}