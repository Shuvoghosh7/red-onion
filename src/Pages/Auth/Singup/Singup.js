import React, { useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import './Singup.css'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';
const Singup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    }); 
    const [showPass, setShowPass] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmailChange = (e) =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };
    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        
    };
    useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [hookError]);
    return (
        <div>
             <div className="login-container">
            <div className="login-title">Sign up</div>
            <form onSubmit={handleLogin} className="login-form">
                <input  type="email" placeholder="Your Email" onChange={handleEmailChange} />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <div className="relative">
                    <input type={showPass ? "text" : "password"} placeholder="password" onChange={handlePasswordChange} />
                    {errors?.password && <p className="error-message">{errors.password}</p>}
                    <p className="absolute top-3 right-5" onClick={() => setShowPass(!showPass)}>🔥</p>
                </div>
                <input onChange={handleConfirmPasswordChange }
                    type="password"
                    placeholder="confirm password"

                />

                <button>Sign up</button>    
                <ToastContainer /> 
            </form>
        </div>
        </div>
    );
};

export default Singup;