import { Autocomplete, Dialog, TextField } from "@mui/material";
import BurgerSvgIcon from "../../resourses/icons/BurgerSvgIcon";
import LogoPostMedSvg from "../../resourses/icons/LogoPostmedSvg";
import SearchSvgIcon from "../../resourses/icons/SearchSvgIcon";
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";
import HeaderUserInfo from "./HeaderUserInfo";
import HeaderMenu from "./HeaderMenu";

export default function HeaderBanner() {
    const [openMenu, setOpenMenu] = useState(false)
    const [searchPopUp, setSearchPopUp] = useState(false);
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState(["medicine", "again medicine", "again medicine", "last medicine"]);
    const loading = open && options.length === 0;

    const openSearchPopUp = function () {
        setSearchPopUp(true);
    }

    return (
        <nav>
            <div className="header-burger-logo">
                <HeaderMenu
                    open={openMenu}
                    setOpen={setOpenMenu}
                />
                <div className="header-logo">
                    <LogoPostMedSvg />
                </div>
            </div>
            <div>
                <div className="header-search-area">
                    {
                        !searchPopUp && <> <div className="header-pseudo-input"
                            onClick={openSearchPopUp}
                        >
                            <p>Search</p>
                        </div>
                            <div onClick={openSearchPopUp} className="search-icon">
                                <SearchSvgIcon />
                            </div>
                        </>
                    }

                </div>
            </div>
            <HeaderUserInfo />
            <Dialog
                maxWidth="70vw"
                open={searchPopUp}
                onClose={() => {
                    setSearchPopUp(false)
                }}
                modale={''}
                BackdropProps={{ invisible: true }}
                PaperProps={{ sx: { borderRadius: "20px" } }}
            >
                <div className="search-popup"
                    style={{
                        width: "70vw",
                        height: "280px"
                    }}
                >
                    <p className="search-popup-title">
                        Search your medication here
                    </p>
                    <div
                        onClick={() => { setActive(true) }}
                        className="search-popup-poeudo-input-area">
                        <div className="popup-pseudo-input"
                            onClick={() => {
                                setSearchPopUp(true);
                            }}
                        >
                            <p>Search</p>
                        </div>
                        <div className="search-icon">
                            <SearchSvgIcon />
                        </div>
                    </div>
                    <p className="search-popup-popularS">Popular searches</p>
                    <div>
                        <span>Cetamol</span>
                        <span>Cetamol</span>
                        <span>Cetamol</span>
                        <span>Cetamol</span>
                        <span>Cetamol</span>
                    </div>
                </div>
                <Dialog
                    open={active}
                    onClose={() => { setActive(false) }}
                    maxWidth="62.5vw"
                    PaperProps={{ sx: { position: "fixed", top: "calc(50vh - 50px)", left: "18.75vw", m: 0, borderRadius: "10px" } }}
                >
                    <div
                        className="search-popup-autocomplate"
                        style={{
                            width: "62.5vw",
                            height: "160px"
                        }}
                    >
                        {/* <Autocomplete
                            id="asynchronous-demo"
                            sx={{ width: 300 }}
                            open={open}
                            active={true}
                            onOpen={() => {
                                setOpen(true);
                            }}
                            onClose={() => {
                                setOpen(false);
                            }}
                            isOptionEqualToValue={(option, value) => option.title === value.title}
                            getOptionLabel={(option) => option.title}
                            options={options}
                            loading={true}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search"
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <React.Fragment>
                                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                {params.InputProps.endAdornment}
                                            </React.Fragment>
                                        ),
                                    }}
                                />

                            )}
                        /> */}
                        <Autocomplete
                            id="combo-box-demo"
                            options={options}
                            value={""}
                            onInputChange={(event, newInputValue) => {
                                console.log(newInputValue);
                            }}
                            renderInput={(params) => <TextField focus={true} placeholder="Search" {...params} />}
                        />

                        <div className="search-icon">
                            <SearchSvgIcon />
                        </div>
                        <p className="search-popup-popularS">Popular searches</p>
                        <div>
                            <span>Cetamol</span>
                            <span>Cetamol</span>
                            <span>Cetamol</span>
                            <span>Cetamol</span>
                            <span>Cetamol</span>
                        </div>

                    </div>
                </Dialog>
            </Dialog>

        </nav>
    )
}