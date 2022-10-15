import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="p-4 box white">

        <h2 className="mb-3 end">Formulaire d'inscription </h2>
        <br></br>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>


        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="username"
              placeholder="Nom et Prénom"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Adresse Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>


 


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 
      box 
      end
      mt-3 
      text-center
      white">
        
        Vous avez deja un compte CHEAPEAT ? <Link to="/">Se connecter</Link>
      </div>
    </>
  );
};

export default Signup;
