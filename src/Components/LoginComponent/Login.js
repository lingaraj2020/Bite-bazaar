import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../../utils/firebase";
import { useNavigate } from 'react-router-dom';
import Validation from './validation';
import { addUser } from '../../utils/Store/userSlice';
import { useDispatch } from 'react-redux'; // Import useDispatch
import Header from './Header';

const Login = () => {
  const [signinform, setsigninform] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errormessage, seterrormessage] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlesigninform = () => {
    setsigninform(!signinform);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function

  const submitform = (e) => {
    e.preventDefault();

    // Validate form inputs
    const message = Validation(email, password);
    seterrormessage(message);

    if (message) return;

    if (!signinform) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
          }).then(() => {
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              displayName: displayName,
              email: email,
            }));
          });
          navigate("/restaurant");
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            seterrormessage("User with this email is already exist !");
          }
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/restaurant");
        })
        .catch((error) => {
          const errorCode = error.code;
          seterrormessage(errorCode + "-" + error.message);

          if (errorCode === "auth/invalid-login-credentials") {
            seterrormessage("Invalid email or password");
          }
        });
    }
  };

  return (
    <>
    
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
        <form className="bg-white shadow-lg rounded px-10 pt-8 pb-10 mb-4 w-96">
          <h2 className="text-3xl font-bold mb-6 text-center">{signinform ? "Sign In" : "Sign up"}</h2>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          {!signinform && (
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                Username:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
          )}
          <div className="mb-8 relative">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
             <p className="text-gray-400 mt-2 text-sm">
                                Password must be more than 6 character, contains one numeric, special, and uppercase character.</p>
                        
            <span
              className="absolute right-0 top-0 mt-11 mr-4 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
          <p className="text-red-500 font-bold text-lg py-2">{errormessage}</p>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 mt-0 mb-0 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={submitform}
            >
              {signinform ? "Sign In" : "Sign up"}
            </button>
          </div>
          <p className="py-4  text-lg cursor-pointer text-center" onClick={handlesigninform}>
            {signinform ? 'New to FoodHub? Sign Up Now' : 'Already registered? Sign In Now.'}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
