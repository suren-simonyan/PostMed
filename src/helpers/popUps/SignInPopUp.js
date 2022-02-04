import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Checkbox, Dialog, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../../resourses/icons/CloseIcon";
import './style.scss'


export default function SignInPopUp({ loginRegister, setLoginRegister, signInPopUp, setSignInPopUp }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        loginRegister == "login" ? <div className="signIn-popUp">
            <div
                onClick={() => { setSignInPopUp(false) }}
                className="signIn-close-btn">
                <CloseIcon color={true} />
            </div>
            <div className="signIn-title">
                <p>Sign In</p>
                <button
                    onClick={() => { setLoginRegister() }}
                >Sign up</button>
            </div>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
            />
            <FormControl className="signIn-password" variant="outlined">

                <InputLabel htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => { setShowPassword(!showPassword) }}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <div className="signIn-remember-forgot-pass">
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Link to="/">Forgot password?</Link>
            </div>
            <button className="signIn-button">
                Login Now
            </button>
            <p>
                <span>No accaunt yet?</span>
                <span
                    onClick={() => { setLoginRegister("register") }}
                >sign up</span>
            </p>
        </div> : <div className="signIn-popUp">
            <div
                onClick={() => { setSignInPopUp(false) }}
                className="signIn-close-btn">
                <CloseIcon color={true} />
            </div>
            <div className="signIn-title">
                <p>Sign Up</p>
            </div>
            <div className="register-name-lastname-fields">
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="LastName"
                    variant="outlined"
                />
            </div>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
            />
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => { setShowPassword(!showPassword) }}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPasswordConfirmation ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => { setShowPasswordConfirmation(!showPasswordConfirmation) }}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <button className="signIn-button">
                Register
            </button>
            <p>
                <span>Already have an account?</span>
                <span
                    onClick={() => { setLoginRegister("login") }}
                >sign in</span>
            </p>
        </div>
    )


}