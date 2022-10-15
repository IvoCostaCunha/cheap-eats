import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";




const Home = () => {

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleChat = async () => {
   
      navigate("/chat");
   
    }


    const handleBuyProduct = async () => {
   
      navigate("/BuyProduct");
   
    }

    const handlePostProducts = async () => {
   
      navigate("/PostProducts");
   
    }
    
    
    

  return (

    <>
      <div className="p-5 box end mt-3 text-center cen">
        
         <br />
        {user && "Bienvenue " +  user.email}
      </div>

      <br/>
      <br/>

      <h1> </h1>


      <div className="d-grid gap-2 margin">
        <Button variant="primary" onClick={handlePostProducts}>
          Post Products
        </Button>
      </div>

      <br/>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleChat}>
          Chat With Others Users
        </Button>
      </div>

      <br/>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleBuyProduct}>
          Buy Products
        </Button>
      </div>

      <br/>
      <br/>
      <br/>


      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
