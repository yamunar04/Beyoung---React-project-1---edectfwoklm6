import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";

function SignUp() {
    const { setUserContext: signUpContext, authTokenData, setAuthTokenData } = useUser();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    }

    async function signUp(userInfo) {
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
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

                signUpContext(token);
                navigate('/');
            } else {
                console.error("SignUp Failed");
            }

        } catch (error) {
            console.log("SignUp failed");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        signUp(userInfo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                id="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
            />
            <input type="submit" value='Sign Up' />
            <p>Already have an account?</p>
            <button onClick={() => navigate('/signin')}>SignIn Here</button>
        </form>
    );
}

export default SignUp;
