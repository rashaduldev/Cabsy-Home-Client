/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";


export const Authcontext=createContext();
export const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    // create user
    const createuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signin user
    const signin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth ,email ,password)
    }

    // Logout user
    const logout=()=>{
        setLoading(true);
        return signOut(auth)
    }

    // currentuser 
    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,currentuser=>{
              setUser(currentuser)
              console.log(currentuser)
              setLoading(false);
          })
          return ()=>{
              return unsubscribe();
          }
      },[])

    const authinfo={
        loading,
        createuser,
        signin,
        logout,
        user
    }
    console.log(authinfo)
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider >
    );
};

export default Authprovider;