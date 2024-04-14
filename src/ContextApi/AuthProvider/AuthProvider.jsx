import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../FirebaseConfig/firebase.config";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(false);
    // console.log("user", user)


    // register new user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photoURL
          })
    }
    // log in existing user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out user
    const logoutUser = () => {
        return signOut(auth)
    }

    // observe the user auth state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            console.log("currentUser", user)
            setUser(user)
        });

        return () => unSubscribe();
    }, [ auth, render]);
    console.log(render)
    // value to be provided to the children components in the AuthContext
    const authInfo = {
        user,
        setRender,
        registerUser,
        loginUser,
        logoutUser,
        updateUserProfile
    }
    // console.log(authInfo)

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}