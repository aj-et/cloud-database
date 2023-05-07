import React, { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from '@firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
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
    return (
        <div className='form-control'>{ authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <></> }</div>
    )
}

export default AuthDetails