import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../../utils/firebase"


import { useNavigate } from "react-router-dom";

const handleSignUp = (email, password, name, setErrorMessage) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      });

      //console.log(user);
      // Assuming you have a useHistory hook
      const navigate = useNavigate();
      navigate.push("/restaurant");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });
};

const handleSignIn = (email, password, setErrorMessage) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Assuming you have a useHistory hook
      const navigate = useNavigate();
      navigate.push("/restaurant");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);

      if (errorMessage === 'auth/invalid-login-credentials') {
        setErrorMessage("Invalid email or password");
      }
    });
};

export { handleSignUp, handleSignIn };



