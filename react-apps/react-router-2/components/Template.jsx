{/* Signup and login have almost the same structure; 
    just the forms and image content are different. 
    Therefore, a Template.jsx is created for the common layout. */}
import React from 'react'
import Signup from '../pages/Signup';

import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
export default function Template({title,desc1,desc2,image,formType,setIsLoggedIn}) {
  return (
    <div>       
            
            {/* Form div */}
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formType==="signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>) }

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>
                    <p>Sign up with Google</p>
                </button>
            </div>

            {/* image div */}

            <div>
                <img src={frameImage} alt="Pattern" width={558} height={504} loading='lazy'/>
                <img src={image} alt="Students" width={558} height={490} loading='lazy'/>
            </div>
    </div>
  );
}
