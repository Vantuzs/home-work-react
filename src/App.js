import CurrentWeater from "./pages/CurrentWeater/CurrentWeater";
import Todoshka from "./pages/Todoshka/Todoshka";
import RegisterForm from "./pages/RegisterFrom/RegisterForm";
import LoginFrom from "./pages/LoginForm/LoginForm";
import { useReducer } from "react";
import { INITIAL_STATE } from "./reducers/userReduser";
import reduser from "./reducers/userReduser";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DashboardForm from "./FormComp/DashbordForm";

function App() {
  const [state,dispatch] = useReducer(reduser,INITIAL_STATE);
  // const navigate =  useNavigate()
  
  
  return (
   <DashboardForm/>
  );
}

export default App;
