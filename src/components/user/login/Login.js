import React, { useEffect, useState } from 'react';
import { ErrorList } from '../../../resources/Error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAPI } from '../../../hooks/useAPI';
import LoginAPI from '../../../api/user'
import Loading from '../../loading/Loading';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    let navigate = useNavigate()
    const getUserLogin = useAPI(LoginAPI.Login)

    const [userLogin, setUserLogin] = useState({ "login-username": "", "login-password": "" })
    const [userRegister, setUserRegister] = useState({ "register-email": "", "register-username": "", "register-phone": "", "register-password": "" })
    const [isValidEmail, setValidEmail] = useState(false)
    const [isValidPassword, setValidPassword] = useState(true)
    const [isPwdMatch, setPwdMatch] = useState(true)
    const [isErr, setErr] = useState("")
    const [isAction, setAction] = useState("")

    useEffect(() => {
        document.title = props.title
    }, [])

    const handleLogin = (e) => {
        setAction("login")
        const field_name = e.target.name
        const field_value = e.target.value
        setUserLogin({ ...userLogin, [field_name]: field_value });
    }
    const handleRegister = (e) => {
        setAction("register")
        const field_name = e.target.name
        const field_value = e.target.value
        if ((field_name === "register-email" && validateEmail(field_value)) || (field_name === "register-password" && validatePassword(field_value)) ||
        (field_name === "register-confirm-pwd" && checkPwdMatch(userRegister["register-password"], field_value)) || (field_name === "register-phone") || (field_name === "register-username")) {
            setUserRegister({ ...userRegister, [field_name]: field_value });
        }
    }
    const login = (e) => {
        e.preventDefault()
        const user = {}
        user.username = userLogin["login-username"]
        user.password = userLogin["login-password"]

        getUserLogin.request(user)
        .then(res => {
            if (res.status) {
                toast.success("Successfully Login!", { position: toast.POSITION.TOP_RIGHT})
                props.setToken(res.result)
                navigate("/")
            } else {
                toast.error(res.result, { position: toast.POSITION.TOP_RIGHT })
            }
        })

    }
    const register = (e) => {
        e.preventDefault()
        // Check all field is filled
        let check_fill = Object.values(userRegister).every(item => item !== "")
        if (!check_fill) toast.warning("All fields need to be filled in")
    }
    const checkPwdMatch = (pwd, confirm_pwd) => {
        if (pwd !== confirm_pwd) {
            setPwdMatch(false)
            setErr("not_match_pwd")
            return false
        }
        setPwdMatch(true)
        setErr("")
        return true
    }
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            setValidEmail(false)
            setErr("invalid_email")
            return false
        }
        setValidEmail(true)
        setErr("")
        return true
    }
    const validatePassword = (password) => {
        if (password.length < 6) {
            setValidPassword(false)
            setErr("invalid_password")
            return false
        }
        setValidPassword(true)
        setErr("")
        return true
    }

    return (
        <div>
            { getUserLogin.loading && <Loading/> }
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                        <ul className="list-inline list-unstyled">
                            <li><a href="home.html">Home</a></li>
                            <li className='active'>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <div className="body-content">
                <div className="container">
                    <div className="sign-in-page">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 sign-in">
                                <h4 className="">Sign in</h4>
                                <p className="">Hello, Welcome to your account.</p>
                                {/* <div className="form-group">
                                    <label className="info-title" htmlFor="login-email">Email Address <span>*</span></label>
                                    <input type="email" className="form-control unicase-form-control text-input" id="login-email" required onChange={handleLogin} name="login-email"/>
                                    <p className='err-msg'>{(isAction === "login") && (!isValidEmail) && isErr === "invalid_email" && ErrorList[isErr]}</p>
                                </div> */}
                                <div className="form-group">
                                    <label className="info-title" htmlFor="login-username">Username <span>*</span></label>
                                    <input type="text" className="form-control unicase-form-control text-input" id="login-username" required onChange={handleLogin} name="login-username"/>
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="login-password">Password <span>*</span></label>
                                    <input type="password" className="form-control unicase-form-control text-input" id="login-password" required onChange={handleLogin} name="login-password"/>
                                </div>
                                {/* <div className="radio outer-xs">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Remember me!
                                    </label>
                                    <a href="#" className="forgot-password pull-right">Forgot your Password?</a>
                                </div> */}
                                <button type="button" className="btn-upper btn btn-primary checkout-page-button" onClick={login}>Login</button>
                            </div>

                            <div className="col-md-6 col-sm-6 create-new-account">
                                <h4 className="checkout-subtitle">Create a new account</h4>
                                <p className="text title-tag-line">Create your new account.</p>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="email">Email Address <span>*</span></label>
                                    <input type="email" className="form-control unicase-form-control text-input" id="email" name="register-email" onChange={handleRegister}/>
                                    <p className='err-msg'>{(isAction === "register") && (!isValidEmail) && isErr === "invalid_email" && ErrorList[isErr]}</p>
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="name">Name <span>*</span></label>
                                    <input type="text" className="form-control unicase-form-control text-input" id="name" name="register-username" onChange={handleRegister}/>
                                    <p className='err-msg'></p>
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="phone">Phone Number <span>*</span></label>
                                    <input type="number" className="form-control unicase-form-control text-input" id="phone" name="register-phone" onChange={handleRegister}/>
                                    <p className='err-msg'></p>
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="password">Password <span>*</span></label>
                                    <input type="password" className="form-control unicase-form-control text-input" id="password" name="register-password" onChange={handleRegister}/>
                                    <p className='err-msg'>{(isAction === "register") && (!isValidPassword) && isErr === "invalid_password" && ErrorList[isErr]}</p>
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                                    <input type="password" className="form-control unicase-form-control text-input" id="confirmPassword" name="register-confirm-pwd" onChange={handleRegister}/>
                                    <p className='err-msg'>{(isAction === "register") && (!isPwdMatch) && isErr === "not_match_pwd" && ErrorList[isErr]}</p>
                                </div>
                                <button type="button" className="btn-upper btn btn-primary checkout-page-button" onClick={register}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;