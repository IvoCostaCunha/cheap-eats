import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from '../../firebase'
import "./Login.css"


function Login() {

    function signIn() {

        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => alert(error.message));

    };
    return (
        <div className='login'>
            <div className="login__logo">

                <img src="https://commons.wikimedia.org/wiki/Category:Facebook_f_logos#/media/File:2021_Facebook_icon.svg" alt="" />

                <img src="https://commons.wikimedia.org/wiki/Category:Facebook_f_logos#/media/File:2021_Facebook_icon.svg" alt="" />


            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login