import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase.config";

export const UserContext = createContext();
const googleProvider = new GoogleAuthProvider()

const AuthContext = ({children}) => {
    const [loading , setLoading] = useState(false)
    const [user,setUser] = useState('')
    const auth = getAuth(app)
    const signIn = () => {
     return    signInWithPopup(auth ,googleProvider)

    }
    const SignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe =    onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
           })
          return () => unsubscribe()
  },[])
    const AuthInfo = {signIn , user, SignOut}
   return (
    <UserContext.Provider value ={AuthInfo}>
           {children}
    </UserContext.Provider>
   )
    
}

export default AuthContext;