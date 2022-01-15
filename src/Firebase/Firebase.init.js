import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const FirebaseInitialize = () => {
    return initializeApp(firebaseConfig);
}
export default FirebaseInitialize;