{/* Signup and login have almost the same structure; 
    just the forms and image content are different. 
    Therefore, a Template.jsx is created for the common layout. */}
import React from 'react'
import Signup from '../pages/Signup';

import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

export default function Template({title,desc1,desc2,image,formType,setIsLoggedIn}) {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between px-3 h-screen'>       
            
            {/* Form div */}
            <div className='w-11/12 max-w-[450px] mx-0'>
                <h1 className='text-white  font-bold text-[1.875rem] leading-[2.5rem]'>{title}</h1>
                <p className='flex  flex-col my-2'>
                    <span className='text-white text-[1.1rem]'>{desc1}</span>
                    <span className='text-blue-100 italic text-[1.1rem]'>{desc2}</span>
                </p>

                {formType==="signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} className="flex-1 overflow-auto"></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>) }

                <div className="flex flex-row w-full items-center my-4 gap-x-2">
                <div className="h-[2px] bg-gray-800 flex-1"></div>
                <p className="text-gray-700 font-medium leading-[1.375rem]">OR</p>
                <div className="h-[2px] bg-gray-800 flex-1"></div>
                </div>

                <button className='w-[70%] justify-center items-center rounded-[8px] font-medium text-gray-100 border border-gray-800 px-[12px] py-[12px] gap-x-2 mt-6 flex hover:bg-gray-800 transition-colors duration-400 mx-auto cursor-pointer
                '>


                    <FcGoogle size={20}></FcGoogle>
                    <p>Sign up with Google</p>
                </button>
            </div>

            {/* image div */}

            <div className='relative w-11/12 max-w-[450px] '>
                <img src={frameImage} alt="Pattern" width={558} height={504} loading='lazy'/>
                <img src={image} className="absolute -top-3 right-3" alt="Students" width={558} height={490} loading='lazy'/>
                
            </div>
    </div>
  );
}
