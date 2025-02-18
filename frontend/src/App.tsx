import { Navigate, Route, Routes } from "react-router-dom"
import {Toaster} from 'react-hot-toast';

import Homepage from "./pages/Homepage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import { useAuthContext } from "./context/AuthContext";


const App = () => {
  const {authUser, isLoading} = useAuthContext();

  if(isLoading) return null;

  return (
    <div className='p-4 h-screen flex items-center justify-center overflow-hidden'>
      <Routes>
        <Route path='/' element={authUser ? <Homepage /> : <Navigate to='/login' />} />
        <Route path='/signup' element={!authUser ? <SignupPage /> : <Navigate to='/' />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App