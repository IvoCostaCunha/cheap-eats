import React, { useContext } from "react";
import Log from "../Components/Log";

const Profil = () => {

    return (
        <div className="profil-page">

            <div className="log-container">
                <Log signin={false} signup={true} />
                <div className="img-container">
                    <img src="./img/logo.png" alt="logo" />
                </div>
            </div>

        </div>
    );
};

export default Profil;
