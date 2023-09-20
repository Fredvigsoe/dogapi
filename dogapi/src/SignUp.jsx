import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import {auth} from "./firebase";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error)
        });
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create User</h1>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
            </input>
            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUp