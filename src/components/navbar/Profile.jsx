import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Provider/UserProvider';
import { FaUser } from 'react-icons/fa'; // Import the user icon from react-icons library

function Profile() {

    const { setUserContext: signOutContext, isUserLoggedIn } = useUser();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    let loginUsername = localStorage.getItem('userInfo');

    function handleSignOut() {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
        signOutContext();
        navigate('/signin')
    }

    useEffect(() => {
        signOutContext(loginUsername)
    }, [])

    return (
        <section className='profile'>
            <div 
                className='profile-icon' 
                onClick={() => setShowModal(!showModal)} 
            >
                <FaUser /> 
            </div>

            {showModal && (
                <section className='auth-modal'>
                    {isUserLoggedIn ? (
                        <button className='signin-btn' onClick={handleSignOut} >Sign Out</button>
                    ) : (
                        <button className='signin-btn' onClick={() => navigate('/signin')} >Sign In</button>
                    )}

                </section>
            )}
        </section>
    )
}

export default Profile;
