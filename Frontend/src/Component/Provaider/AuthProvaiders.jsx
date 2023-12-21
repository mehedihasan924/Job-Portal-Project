import React, { createContext, useEffect, useState } from 'react';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';




 export const AuthContext= createContext(null)
 const auth=getAuth(app)
 const googleAuthProvider = new GoogleAuthProvider();



const AuthProvaiders = ({children}) => {

      const [user, setUser]=useState(null);

      // Reload dile jate na jay
      const [loading, setLoading]=useState(true)


   // Register from connect kora hoise 
      const creatUser=(email, password)=>{
         return createUserWithEmailAndPassword(auth, email, password)
      }

  // login from connect kora hoise
      const signIn=(email, password)=>{
       return signInWithEmailAndPassword(auth ,email,password)
      } 
 
  // SignIn With google
  const signWithGoogle=()=>{
    return signInWithPopup( auth, googleAuthProvider)
  }

   // User login ase kina check// state change
      useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("Auth stste change", currentUser);
            setUser(currentUser);
            setLoading(false)
         });
         return()=>[
            unsubscribe()
         ]
      },[])

// SignOut System
      const logOut=()=>{
        return signOut(auth)
      }
   // Akan teke use kora hoise  
      const authInfo={
            user,
            loading,
            creatUser,
            signIn,
            signWithGoogle,
            logOut
      }

    return (
       <AuthContext.Provider value={authInfo}>
                {children}
       </AuthContext.Provider>
    );
};

export default AuthProvaiders;