import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"


const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App