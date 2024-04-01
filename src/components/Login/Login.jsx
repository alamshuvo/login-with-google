import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/Firebase.init';
const Login = () => {
    const [usera,setUsera]=useState({})
    const provider = new GoogleAuthProvider();
    console.log(auth);
    const handleGoogleSignin=()=>{
       
        console.log("google mama is comming");
        signInWithPopup(auth,provider)
        .then(result=>{
            const logdinUser=result.user;
            console.log(logdinUser);
            setUsera(logdinUser)
        })
        .catch(error=>{
            console.log("error",error.message);
        })
    }
    const handleGoogleSignOut=()=>{
        setUsera(null)
        signOut(auth).then((result) => {
            // Sign-out successful.
            setUsera(null);
            console.log(result);
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div>
            {
                usera ? <button onClick={()=>handleGoogleSignOut()} className='btn btn-primary mt-4 ml-4'>sign Out</button> : <button onClick={()=>handleGoogleSignin()} className='btn btn-primary mt-4'>Google Login</button>
            }
           
            
            {usera&&
                <div>
                    <h3 className='mt-5 text-xl md:text-3xl font-bold'> User: {usera.displayName}</h3>
                    <h3 className='mt-5 text-xl md:text-3xl font-bold'> Email: {usera.email}</h3>
                    <img src={usera.photoURL} alt="" />

                </div>
            }
        </div>
    );
};

export default Login;