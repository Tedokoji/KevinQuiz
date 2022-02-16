import { Route, Routes } from "react-router-dom";
import Dash from "./Views/DashBoard/Dash";
import Login from "./Views/Login/Login";

function App() {
  return (
 
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dash/>}/>
    </Routes>
    
  );
}

export default App;
