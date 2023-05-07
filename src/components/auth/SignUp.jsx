import React, {useState} from 'react'
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from '@firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // This is the event listener for the sign up component
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then ((userCredential) => {
            console.log(userCredential)
            // showNotification();
        }).catch((error) => {
            console.log(error);
        });

        // This will clear out the text field when button is clicked
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
    
    // This will display the sign up component
    return (
        <div className='sign-up-container'>
            <form className='form-control' onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Sign Up</button>
            </form>

            {/* <div className='notification-container sign-up' id='notification-container'>
                <p>Account Created!</p>
            </div> */}
        </div>
    );
};

export default SignUp;