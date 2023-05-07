import React, {useState} from 'react'
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from '@firebase/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then ((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            showNotification();
        });

        setEmail('');
        setPassword('');
    };

    const notification = document.getElementById('notification-container');
    const showNotification = () => {
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }

    return (
        <div className='sign-in-container'>
            <form className='form-control' onSubmit={signIn}>
                <h1>Log In</h1>
                <input type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Log In</button>
            </form>

            <div className='notification-container' id='notification-container'>
                <p>Account not found!</p>
            </div>
        </div>
    );
};

export default SignIn;