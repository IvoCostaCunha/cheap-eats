
import React from 'react'
import logo from "../../logo.png"
import "./Header.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>

            <div className="header__droit">

                <img src={logo} alt="logo cheapeats" />
            </div>

            <div className='navbar'>

                <ul>

                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li><strong>HOME </strong></li>
                    </NavLink>

                    <NavLink
                        to="/DemoApp"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li><strong>DEMO APP </strong></li>
                    </NavLink>

                    <NavLink
                        to="/CoreTeamDev"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li><strong>CORE TEAM DEVELLOPEMENT </strong></li>
                    </NavLink>



                    <NavLink
                        to="/Roadmap"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li><strong>ROADMAP </strong></li>
                    </NavLink>



                    <NavLink
                        to="/Profil"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li><strong>PROFIL </strong></li>
                    </NavLink>





                </ul>
            </div>


            <div className="header__millieu"></div>


            <div className="header__gauche"></div>


            Header

        </div>
    )
}

export default Header

