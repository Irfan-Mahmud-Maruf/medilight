import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    //google sing in
    const googleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    //Email sing in
    const singInWithEmail = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    };

    //Email singUp
    const singUpWithEmail = (e) => {
        e.preventDefault()
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const getEmail = (e) => {
        setEmail(e?.target?.value)
    }
    const getPassword = (e) => {
        setPassword(e?.target?.value)
    }
    //Get the currently signed-in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {

            }
        });
        return () => unSubscribe;
    }, []);
    const singOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
            .catch((error) => {
                setError(error.message)
            })
    };



    return {
        user,
        googleSingIn,
        error,
        singOut,
        getEmail,
        getPassword,
        singInWithEmail,
        singUpWithEmail
    }

}
export default useFirebase;