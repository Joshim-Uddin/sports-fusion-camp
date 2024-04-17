import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleAuthProvider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
  const [open, setOpen] = useState(true) //open or close the dashboard sidebar
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //This state will control the theme day or night
  const [night, setNight] = useState(false)
  const axiosPublic = useAxiosPublic()


  
  //signup new users
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login existing users
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //logout users
  const logout = (email, password) => {
    setLoading(true);
    return signOut(auth);
  };

  //google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  //user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email,
        };
        axiosPublic.post('/jwt', loggedUser)
        // fetch(
        //   "http://localhost:5000/jwt",
        //   {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(loggedUser),
        //   }
        // )
          .then((res) => {
            if(res.data.token){
              localStorage.setItem("fusion-camp", res.data.token);
            }
          })
      } else {
        localStorage.removeItem("fusion-camp");
      }
    });
    return () => unsubscribe();
  }, [axiosPublic]);

  const authInfo = {
    user,
    signUp,
    login,
    logout,
    loading,
    googleSignIn,
    open,
    setOpen,
    night, setNight
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
