import { Button, ClickAwayListener, Dialog, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import { useRef, useState } from "react";
import ProfileSvgIcon from "../../resourses/icons/ProfileSvgIcon"
import BagSvgIcon from "../../resourses/icons/BagSvgIcon"
import SettingsSvgIcon from "../../resourses/icons/SettingsSvgIcon";
import SignInSvgIcon from "../../resourses/icons/SignInSvgIcon";
import SignInPopUp from "../../helpers/popUps/SignInPopUp";
import "./style.scss";
import { Link } from "react-router-dom";


export default function HeaderUserInfo() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [signIn, setSignIn] = useState(false);
    const [signInPopUp, setSignInPopUp] = useState(false);
    const [loginRegister, setLoginRegister] = useState("login");

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className="header-actions">
            <a className="header_favorite">
                <i className="icon-Heart">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </i>
            </a>
            {
                signIn ? <div className="header-profile">
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        style={{ width: "40px" }}
                    >
                        <ProfileSvgIcon />
                    </Button>
                    <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <div className="header-account-drop-down-vector"></div>

                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={open}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <span>User Name</span>
                                                <SettingsSvgIcon />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ProfileSvgIcon />
                                                <span>My account</span>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ProfileSvgIcon />
                                                <span>My account</span>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ProfileSvgIcon />
                                                <span>My account</span>
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div> : <div className="header-sign-in">
                    <Button
                        onClick={() => {
                            setLoginRegister("login")
                            setSignInPopUp(true)
                        }}
                    >
                        <SignInSvgIcon />
                    </Button>
                </div>
            }
            <div className="header-bag">
                <Link to="/bag">
                <Button
                    style={{ width: "40px" }}
                >
                    <BagSvgIcon />
                </Button>
                </Link>
            </div>
            <Dialog
                open={signInPopUp}
                onClose={() => { setSignInPopUp(false) }}
                maxWidth="462px"
            >

                <SignInPopUp
                    signInPopUp={signInPopUp}
                    setSignInPopUp={setSignInPopUp}
                    setLoginRegister={setLoginRegister}
                    loginRegister={loginRegister}
                />
            </Dialog>
        </div>
    )
}