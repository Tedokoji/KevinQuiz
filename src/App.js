import { Route, Routes } from "react-router-dom";
import Dash from "./Views/MainScreen/DashBoard/Dash";
import Login from "./Views/Login/Login";
import Welcome from "./Views/MainScreen/Welcome/Welcome";

function App() {
  return (
 
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dash/>}/>
    </Routes>
    
  );
}

export default App;
