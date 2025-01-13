import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reudux/action/auth.action';
import { useNavigate } from 'react-router-dom';
import mainlogo from "../assets/StreamDeck.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
         <div className="bg-white shadow-lg rounded-lg p-6  md:p-12 flex flex-col items-center space-y-6 w-full max-w-sm">
            <h2 className="text-3xl  md:text-3xl font-bold text-gray-800 text-center">
               StreamDeck
            </h2>
             <div className='w-20 sm-28 md:w-32'>
                <LazyLoadImage src={mainlogo}  className="h-full w-full  object-cover" />
             </div>
            <button onClick={handleLogin} className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 text-sm sm:text-base md:text-lg">
               Login with Google
            </button>
          
         </div>
      </div>
   );
};

export default Login;
