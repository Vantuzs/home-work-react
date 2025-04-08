import RegisterForm from "../pages/RegisterFrom/RegisterForm";
import LoginForm from '../pages/LoginForm/LoginForm';
import HomePage from "../pages/HomePageForm/HomePage";
import { useReducer } from "react";
import { INITIAL_STATE } from "../reducers/userReduser";
import reduser from "../reducers/userReduser";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import styles from './DashbordFrom.module.scss'

function DashboardForm() {
    const [state,dispatch] = useReducer(reduser,INITIAL_STATE);

    return (
        <BrowserRouter>
    <header className={styles.header}>
        <nav>
         <ul>
            <li><Link to='/'>Home</Link></li>
          <li><Link to='register'>RegisterForm</Link></li>
          <li><Link to='login'>LoginForm</Link></li>
         </ul>
        </nav>
    </header>
    <>
    {/* <h1>Current user: {state.email !=='' ? `Hi ${state.email}`: 'authorization required'}</h1> */}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/register' element={<RegisterForm dispatch={dispatch}/>}/>
      <Route path="/login" element={<LoginForm dispatch={dispatch}/>}/>
      <Route path="*" element={<h1>404 - page not FOund</h1>}/>
    </Routes>
    </>
        </BrowserRouter>
    )
}

export default DashboardForm