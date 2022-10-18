import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import PostProducts from "./components/PostProducts/PostProducts";
import BuyProduct from  "./components/buyProduct/BuyProduct";
import Contact  from "./components/contact/Contact";
import Chat  from "./components/Chat";




function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/PostProducts" element={<PostProducts />} />
              <Route path="/PostProducts" element={<PostProducts />} />
              <Route path="/BuyProduct" element={<BuyProduct />} />
              <Route path="/PostProducts" element={<PostProducts />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Chat" element={<Chat />} />



              



              


            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
