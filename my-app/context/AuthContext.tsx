import React,{createContext,useContext, useEffect, useState} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from '../config/firebase';

const AuthContext = createContext<any>({});
export const useAuth = ()=>useContext(AuthContext);

export const AuthContextProvider = ({children}:{children:React.ReactNode})=>{
const [user, setUser] = useState<any>(null);
const [isLoading, setIsLoading] = useState(true)
const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const logout = async () => {
    setUser(null)
    await signOut(auth)
}
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
       if(user){
        setUser({
          uid:user.uid,
          email:user.email,
          displayName:user.displayName  
        })
       }else{
        setUser(null)
       }
       setIsLoading(false)
      })
      return () => {
       unsubscribe()
      }
    
    }, [])
    
    return <AuthContext.Provider value={{user,signUp,login,logout}}>{isLoading? null :children}</AuthContext.Provider>
}