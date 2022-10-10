import './App.css';
import Home from './Pages/Home/Home.jsx';
import CoreTeamDev from './Pages/CoreTeamDev/CoreTeamDev.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DemoApp from './Pages/DemoApp/DemoApp.jsx';
import Roadmap from './Pages/Roadmap/Roadmap.jsx';
import Profil from './Pages/Profil/Profil.jsx';





function App() {
  return (
    <div className="app">


<BrowserRouter>

<Routes>
  <Route path="/Home" element={<Home />} />
  <Route path="/DemoApp" element={<DemoApp />} />
  <Route path="/CoreTeamDev" element={<CoreTeamDev />} />
  <Route path="/Roadmap" element={<Roadmap />} />
  <Route path="/Profil" element={<Profil />} />


 
  <Route path="*" element={<Home />} />

</Routes>
</BrowserRouter>
     
    </div>
  );
}

export default App;
