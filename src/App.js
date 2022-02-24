import { Route, Routes } from "react-router-dom";
import Dash from "./Views/MainScreen/DashBoard/Dash";
import Login from "./Views/Login/Login";
import Welcome from "./Views/MainScreen/Welcome/Welcome";
import { Provider } from 'react-redux';
import {store} from './Redux/Store'
import Content from "./Views/MainScreen/DashBoard/Content";
import CreateQuiz from './Views/MainScreen/CreateQuiz.js/CreateQuiz';
function App() {
  return (
 
      <Provider store={store}>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      
      <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<><Dash/><Content/></>}/>
        <Route path="/createquiz" element={<><Dash/><CreateQuiz/></>}/>

    </Routes>
      </Provider>
    
  );
}

export default App;
