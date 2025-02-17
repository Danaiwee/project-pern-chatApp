import { useState } from "react";
import { Link } from "react-router-dom";

import InputField from "../components/InputField";
import GenderCheckbox from "../components/GenderCheckbox";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleCheckboxChange = (gender: "male" | "female") => {
    setFormData({
      ...formData,
      gender
    })
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="w-full h-full items-center justify-center">
      <div className="w-full max-w-md h-full mx-auto flex items-center">
        <div className="h-fit w-full bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-6">
          <h1 className="text-3xl font-medium text-white text-center">
            Sign Up <span className="text-gray-900">ChatApp</span>
          </h1>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 mt-5">
            <InputField
              label="Full Name"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
            />

            <InputField
              label="Username"
              id="username"
              name="username"
              placeholder="johndoe"
              value={formData.username}
              onChange={handleInputChange}
            />

            <InputField
              label="password"
              id="password"
              name="password"
              placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;'
              type='password'
              value={formData.password}
              onChange={handleInputChange}
            />

            <InputField
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type='password'
              placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;'
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />

            <div className='flex items-center gap-4 justify-center'>
              <GenderCheckbox 
                selectedGender={formData.gender}
                onCheckboxChange={handleCheckboxChange}
              />

            </div>

            <button className='w-full py-2 rounded-lg bg-gray-900 text-white font-medium cursor-pointer'>
                Sign Up
            </button>

          </form>

          <div className='flex items-center justify-center gap-1 mt-3'>
            <span className='text-sm text-white'>Already have an account{' '}</span>
            <Link to='/login' className='text-sm text-gray-900 hover:text-gray-800 hover:underline font-medium'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
