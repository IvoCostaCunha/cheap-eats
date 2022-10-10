import React from 'react'
import Header from '../../Components/Header/Header'
import Login from '../../Components/Login/Login';
import Story from '../../Components/Story/Story'

const Home = () => {

    const user = null;

    return (


        <div className="app">
            {!user ? (

                <Login />

            ) : (

                <>

                    <Home />
                    <Header />
                    <Story />

                </>)}

        </div>


    )
}

export default Home