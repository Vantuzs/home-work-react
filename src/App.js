import CurrentWeater from './pages/CurrentWeater/CurrentWeater'
import Todoshka from './pages/Todoshka/Todoshka'
import LogIn from './pages/LogInFrom/LogInFrom'
import SingUp from './pages/SingUpForm/SingUpForm'
import { useReducer } from 'react'
import { INITIAL_STATE } from './reducers/userReducer'
import reducer from './reducers/userReducer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <BrowserRouter>
      <h1>
        Current user:{' '}
        {state.email !== '' ? `Hi ${state.email}` : 'authorization required'}
      </h1>
      <Routes>
        <Route path='/' element={<h1>It's a main page!</h1>} />
        <Route path='/login' element={<LogIn dispatch={dispatch} />} />
        <Route path='*' element={<h1>404 - Page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
