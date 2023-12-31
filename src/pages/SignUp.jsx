import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";

// function SignUp() {
//     const {setUserContext: signUpContext} = useUser;
//     const navigate = useNavigate();
//     const [userInfo, setUserInfo] = useState({
//         name : '',
//         email : '',
//         password : ''
//     });

//     function handleChange(event) {
//         const {name, value} = event.target;
//         setUserInfo({...userInfo, [name] : value});
//     }
//     console.log(userInfo);

//     function handleSubmit(event) {
//         event.preventDefault();
//         signUp(userInfo);
//     }

//     async function signUp(userInfo){
//         try{
//             //post request for signup

//             const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup",
//                 {
//                     method: 'POST',
//                     headers: {
//                         'projectID': 'edectfwoklm6',
//                     },
//                     body: JSON.stringify({
//                         ...userInfo,
//                         appType: ecommerce
//                     })
//                 }
//             );
//             // if the response is successful then we extract data from the json
//             if(response.ok){
//                 const data = await response.json();
//                 console.log({ response, data });
//                 // destructing the data
//                 const {token, data : {name} } = data;
//                 console.log({name});

//                 sessionStorage.setItem('authToken', token);
//                 sessionStorage.setItem('userInfo', JSON.stringify(name));

//                 //pass the user data to the context
//                 signUpContext(token);
//                 // once signup is done we have to navigate user to home page
//                 navigate('/');
//             } else{
//                 console.error("SignUp Failed")
//             }

//         }catch(error){
//             console.log("SignUp failed");
//         }
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name: </label>
//             <input 
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={userInfo.name}
//                 onChange={handleChange}
//             />
//             <label htmlFor="email">Email: </label>
//             <input 
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={userInfo.email}
//                 onChange={handleChange}
//             />
//             <label htmlFor="password">Password: </label>
//             <input 
//                 type="text"
//                 id="password"
//                 name="password"
//                 value={userInfo.password}
//                 onChange={handleChange}
//             />
//             <input type="submit" value='Sign Up'/>
//             <p>Already have an account?</p>
//             <button onClick={() => navigate('/signin')}>SignIn Here</button>
//             {/* navigate user to signin page */}
//         </form>
//     )
// }

// export default SignUp; 

// Import statements...

function SignUp() {
    const { setUserContext: signUpContext } = useUser();
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
                    'Content-Type': 'application/json', // Add this line
                },
                body: JSON.stringify({
                    ...userInfo,
                    appType: 'ecommerce', // Fix this line
                })
            });

            if (response.ok) {
                const data = await response.json();
                const { token, data: { name } } = data;

                sessionStorage.setItem('authToken', token);
                sessionStorage.setItem('userInfo', JSON.stringify({ name })); // Fix this line

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
            {/* navigate user to signin page */}
        </form>
    );
}

export default SignUp;
