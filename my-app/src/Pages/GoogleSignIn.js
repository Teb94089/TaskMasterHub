import React from 'react';
import firebase from 'firebase/app'

const GoogleSignIn = (props) => {
        const handleGoogleSignIn = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    // Handle successful sign-in
                    const user = result.user;
                    console.log('Signed in with Google:', user);
                })
                .catch((error) => {
                    // Handle sign-in error
                    console.error('Google sign-in error:', error);
                });
        };

        return (
            <button className="google-sign-in" onClick={handleGoogleSignIn}>
                Sign in with Google
            </button>
        );
    }

export default GoogleSignIn;

