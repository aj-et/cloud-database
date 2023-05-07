import React, { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from '@firebase/auth';

// This will show if you are logged in
const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    // If you are looged in, it will get your user details else it will be set to none
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out succesful')
        }).catch(error => console.log(error))
    }
    // This will show the sign out button when logged in
    return (
        <div className='form-control acct-stat'>{ authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>No accounts signed in!</p> }</div>
    )
}

export default AuthDetails