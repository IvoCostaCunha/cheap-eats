import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";

import logo from '../assets/logo.png'; 


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (

    
    <>
      <div>

        <div className="logo">

        <img src={logo} alt="logo" /> 


        </div>

        
      
        {error && <Alert variant="danger">{error}</Alert>}

  
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 espace" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Adresse mail"
              
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

        

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2 ">
            <Button classname="" variant="btn btn-dark" type="Submit">
              Se connecter
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 end mt-3 text-center">
        Vous n'avez pas de compte CHEAPEAT ? <Link to="/signup">S'inscrire</Link>
      </div>
    </>
  );
};

export default Login;
