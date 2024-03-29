import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const axios = useAxiosPublic()
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const createRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const createLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const userUpdate = (name, image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:image,
        })
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            if (currentUser) {
                setUser(currentUser)
                // const user = {email: currentUser.email}
                // axios.post('/jwt',user)
                // .then(res=>{
                //     const {token} = res.data
                //     localStorage.setItem('token',token)
                //     setLoading(false)
                // })
                setLoading(false)
            } else{
                // localStorage.removeItem('token')
                setUser(null)
                setLoading(false)
            }
            
        })
        return ()=>{
            unSubscribe()
        }
    },[auth, axios])
    const authInfo = {
        user,
        loading,
        createRegister,
        createLogin,
        logOut,
        userUpdate,
        googleLogin
    };
    
    return <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>;
};

export default AuthProvider;
