import React from 'react'
import logo from "./logo.png"

const Header = () => {
    return (
        <div className='header'>

            <div className="header__droit">

                <img src={logo} alt="logo cheapeats" />
            </div>

            <div className="header__millieu"></div>

            <div className="header__gauche"></div>


            Header

        </div>
    )
}

export default Header