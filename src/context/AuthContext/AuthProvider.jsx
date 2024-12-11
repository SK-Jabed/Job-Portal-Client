// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import React, { useState } from 'react';
// import AuthContext from "./AuthContext";
// import auth from '../../firebase/firebase.config';

// const AuthProvider = ({ children }) => {   
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Add email state for global access
//     // const [email, setEmail] = useState("");

//     const createNewUser = (email, password) => {
//     	setLoading(true);
//       return createUserWithEmailAndPassword(auth, email, password);
//     };

//     // const loginUser = (email, password) => {
//     //   return signInWithEmailAndPassword(auth, email, password);
//     // };

//     // const signInWithGoogle = () => {
//     //   return signInWithPopup(auth, googleProvider);
//     // };

//     // const logoutUser = () => {
//     //   return signOut(auth);
//     // };

//     // const updateUserProfile = (updatedData) => {
//     //   return updateProfile(auth.currentUser, updatedData);
//     // };

//     // useEffect(() => {
//     //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     //     setUser(currentUser ? currentUser : null);
//     //     setLoading(false);
//     //   });
//     //   return () => unsubscribe();
//     // }, []);

//     const authInfo = {
//       createNewUser,
//       // loginUser,
//       // signInWithGoogle,
//       // logoutUser,
//       user,
//       setUser,
//       loading,
//       // updateUserProfile,
//       // email,
//       // setEmail,
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    singInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;