import { createContext,useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from "firebase/auth"
import { auth } from "../firebase";

const UserContext = createContext()


 const AuthContextProvider = ({children})=>{

    const[user,Setuser] = useState({})

const createUser = (email,password)=>{

    return createUserWithEmailAndPassword(auth,email,password)

};

const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logout = ()=>{
    return signOut(auth)
}

useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
        console.log(currentUser);
        Setuser(currentUser)
    });

    return ()=>{
        unsubscribe();
    }

},[])

    return (

        <UserContext.Provider value={{createUser,user,logout,signIn}}>
            {children}
        </UserContext.Provider>

    )
}


 const UserAuth = () => {
    return useContext(UserContext)
}

export {UserAuth,AuthContextProvider}