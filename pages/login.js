import React, { useState } from 'react';
import FirebaseAuth from '../components/auth/FirebaseAuth';
import { auth } from '../components/auth/FirebaseAuth';
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { setUserCookie } from '@/lib/firebase/userCookies'
import { mapUserData } from '@/lib/firebase/mapUserData'
// import './Login.css'; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userData = mapUserData(user);
        setUserCookie(userData);
      } catch (error) {
        // Handle sign-in errors, e.g., incorrect email/password
        console.error("Sign-in error:", error.code, error.message);
      }
    };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FirebaseAuth />
        </form>
      </div>  
    </div>
  );
}
