import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

import InputField from "../components/InputField";
import useLogin from "../hooks/useLogin";

interface LoginFormData{
  username: string
  password: string
} 

const LoginPage = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  });

  const {login, loading} = useLogin();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(formData)
  };
  return (
    <motion.div 
      className="w-full h-full flex items-center jsutify-center"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
    >
      <div className="w-full max-w-md h-full mx-auto flex items-center">
        <div className="h-fit w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-6">
          <h1 className="text-3xl font-medium text-white text-center">
            Sign In <span className="text-gray-900">ChatApp</span>
          </h1>

          <form onSubmit={handleFormSubmit}>
              <InputField 
                label="Username"
                id="username"
                name="username"
                placeholder="johndoe"
                value={formData.username}
                onChange={handleInputChange}
              />

              <InputField 
                label="Password"
                id="password"
                name="password"
                type='password'
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
                value={formData.password}
                onChange={handleInputChange}
              />

              <button 
                className='w-full py-2 rounded-lg bg-gray-900 text-white font-medium cursor-pointer mt-5'
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
            </button>

            <div className='flex items-center justify-center gap-1 mt-3'>
            <span className='text-sm text-white'>Do not have an account?{' '}</span>
            <Link to='/signup' className='text-sm text-gray-900 hover:text-gray-800 hover:underline font-medium'>
              Sign up
            </Link>
          </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
