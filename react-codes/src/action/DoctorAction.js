import axios from'axios'
import { GOOGLE_SIGNIN_FAIL, GOOGLE_SIGNIN_REQUEST, GOOGLE_SIGNIN_SUCCESS } from '../constant.js/DoctorConstant';
import { auth, googleAuthProvider, provider } from '../firebase'


const googleSigninRequest=()=>({
    type:GOOGLE_SIGNIN_REQUEST
})

const googleSigninSuccess=()=>({
    type:GOOGLE_SIGNIN_SUCCESS
})

const googleSigninFail=()=>({
    type:GOOGLE_SIGNIN_FAIL
})


export const signInWithGoogle = () => {
    return function(dispatch){
        dispatch(googleSigninRequest())
        auth.signInWithPopup(provider).then(({user})=>{
            dispatch(googleSigninSuccess(user))
        }).catch((error)=>dispatch(googleSigninFail(error.message)))
    }

}
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const name = result.user.displayName;
//         const email = result.user.email;
//         const profilePic = result.user.photoURL;
  
//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);
//         localStorage.setItem("profilePic", profilePic);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };