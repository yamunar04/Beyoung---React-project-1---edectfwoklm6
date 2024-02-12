import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";

function SignIn() {
    const { setUserContext: signInContext, authTokenData, setAuthTokenData } = useUser();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    async function signIn(userInfo) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
                method: 'POST',
                headers: {
                    'projectID': 'edectfwoklm6',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...userInfo,
                    appType: 'ecommerce',
                })
            });

            if (response.ok) {
                const data = await response.json();
                const { token, data: { name } } = data;

                sessionStorage.setItem('authToken', token);
                sessionStorage.setItem('userInfo', JSON.stringify({ name }));
                setAuthTokenData(token);

                signInContext(token);
                navigate('/');
            } else {
                console.error("SignIn Failed");
            }
        } catch (error) {
            console.error("SignIn failed", error);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        signIn(userInfo);
    }

    return (
        <form onSubmit={handleSubmit} className="form-section">
            <label className="label-top" htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="password" 
                id="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
            />
            <input type="submit" value='Sign In' id="sign-button"/>
            <p>Don't have an account?</p>
            <button id="sign-button" onClick={() => navigate('/signup')}>SignUp Here</button>
        </form>
    )
}

export default SignIn;
