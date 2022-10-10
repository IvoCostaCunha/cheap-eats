import React from 'react'
import logo from "../logo.png"
import "../Header/Header.css"

const Header = () => {
    return (
        <div className='header'>

            <div className="header__droit">

                <img src={logo} alt="logo cheapeats" />
            </div>

            <div className='navbar'>

                <ul>
                    <li>Home</li>
                    <li>Demo App</li>
                    <li>Core Team Dev</li>
                    <li>Sign in</li>
                    <li>Sign Up</li>

                </ul>
            </div>


            <div className="header__millieu"></div>


            <div className="header__gauche"></div>


            Header

        </div>
    )
}

export default Header