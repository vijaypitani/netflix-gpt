import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validation for form data
    console.log(email.current.value);
    console.log(password.current.value);;
    const messsage = checkValidData(email?.current?.value, password?.current?.value, name?.current?.value);
    setErrorMessage(messsage);
    if(messsage) return;
    //Sign In Sign Up Logic
    if(!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR,
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              }));
          }).catch((error) => {
            setErrorMessage(error.message);
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    
  }

  const toggleSignInForm = () =>  {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img 
        src= {BG_IMG_URL} 
        alt="background-image" 
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-14 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <label className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</label>
        <input 
           ref={email}
           type='text'
           placeholder='Email Address'
           className='p-4 my-4 w-full bg-gray-700'/>
        {!isSignInForm && <input 
           ref={name}
           type='text'
           placeholder='Full Name'
           className='p-4 my-4 w-full bg-gray-700'/>}
        <input 
          ref={password}
          type='password' 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700'/>
        <p className='text-red-600 py-2 font-bold text-lg'>{errorMessage}</p>
        <button 
           className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>
            {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <div className='py-4' role="button" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign Up"}</div>
      </form>
    </div>
  )
}

export default Login;