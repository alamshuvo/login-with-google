import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase/Firebase.init';
const Login = () => {
    const provider = new GoogleAuthProvider();
    console.log(auth);
    const handleGoogleSignin=()=>{
        console.log("google mama is comming");
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log("error",error.message);
        })
    }
    return (
        <div>
            <button onClick={()=>handleGoogleSignin()} className='btn btn-primary mt-4'>Google Login</button>
        </div>
    );
};

export default Login;