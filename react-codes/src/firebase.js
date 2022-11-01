import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB-ncub8MQklTwr3BvNTd00uGBxROm4FR0",
  authDomain: "editor-book.firebaseapp.com",
  projectId: "editor-book",
  storageBucket: "editor-book.appspot.com",
  messagingSenderId: "164335064903",
  appId: "1:164335064903:web:8c2604a496b65350ef1e62"
};

// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider()
// export const app = initializeApp(firebaseConfig);

// export const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const storage = getStorage();
// export const db = getFirestore()


export const signInWithGoogles = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};