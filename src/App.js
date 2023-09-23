import { Route, Routes } from "react-router-dom";
import Dash from "./Views/MainScreen/DashBoard/Dash";
import Login from "./Views/Login/Login";
import Welcome from "./Views/MainScreen/Welcome/Welcome";
import Content from "./Views/MainScreen/DashBoard/Content";
import CreateQuiz from './Views/MainScreen/CreateQuiz.js/CreateQuiz';
import {Provider } from "react-redux"
import { store } from './Redux/Store';
import TestSheet from "./Views/MainScreen/Quiz/TestSheet";
import UpdateQuiz from './Views/MainScreen/CreateQuiz.js/UpdateQuiz'
import Roles from "./Views/MainScreen/Roles";
function App() {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      
      <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<><Dash/><Content/></>}/>
        <Route path="/createquiz" element={<><Dash/><CreateQuiz/></>}/>
        <Route path="/test" element={<><Dash/><TestSheet/></>}/>
        <Route path="/update" element={<><Dash/><UpdateQuiz/> </>}/>
      
      
        <Route path="/createTeacherOrStudents" element={<><Dash/><Roles/> </>}/>
        
    </Routes></Provider>
  );
}

export default App;
