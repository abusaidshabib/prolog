import { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app);

const UserContext = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,
      currentUser => {
        setUser(currentUser);
        setLoading(false);
      })
    return () => unSubscribe();
  }, [])


  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  }

  const verify = () => {
    return sendEmailVerification(auth.currentUser)
  }

  const allInfo = {
    createUser, updateUser, verify, user, logIn
  };

  return (
      <AuthContext.Provider value={allInfo}>
        {children}
      </AuthContext.Provider>
  )

};

export default UserContext;