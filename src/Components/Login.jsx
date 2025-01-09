import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reudux/action/auth.action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const dispatch =  useDispatch()
  const navigate =  useNavigate()
 const handleLogin = () => {
   dispatch(login())
     .then(() => {
       navigate("/home");
     })
     .catch((error) => {
       console.error('Login failed:', error);
     });
 };
      
   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-12 flex flex-col items-center space-y-6 w-full max-w-sm">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center">
               YouTube Clone
            </h2>
            <img
               src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
               alt="YouTube Logo"
               className="w-20 sm:w-28 md:w-32"
            />
            <button onClick={handleLogin} className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 text-sm sm:text-base md:text-lg">
               Login with Google
            </button>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center">
               This project is made using <br /> YOUTUBE DATA API
            </p>
         </div>
      </div>
   );
};

export default Login;
