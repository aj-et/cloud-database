import React, {useState} from 'react'
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from '@firebase/auth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // This function is the event handler when sign in button is clicked
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then ((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            // showNotification();
            console.log(error);
        });

        // This will clear out the text box when button is clicked
        setEmail('');
        setPassword('');
    };

    // // This is the notification stuff I added for fun
    // const notification = document.getElementById('notification-container');
    // const showNotification = () => {
    //     notification.classList.add('show');

    //     // The notification will show up for 2 seconds before disappearing
    //     setTimeout(() => {
    //         notification.classList.remove('show');
    //     }, 2000);
    // }

    return (
        <div className='sign-in-container'>
            <form className='form-control' onSubmit={signIn}>
                <h1>Log In</h1>
                <input type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Log In</button>
            </form>

            {/* This will be hidden until the button is pressed and detected error */}
            {/* <div className='notification-container sign-in' id='notification-container'>
                <p>Account not found!</p>
            </div> */}
        </div>
    );
};

export default SignIn;