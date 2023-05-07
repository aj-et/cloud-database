import React, {useState} from 'react'
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from '@firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then ((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        });

        setEmail('');
        setPassword('');
    };
    
    return (
        <div className='sign-up-container'>
            <form className='form-control' onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;