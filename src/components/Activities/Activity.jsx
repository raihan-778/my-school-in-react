import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import app from "../../Firebase/firebase.init";

const auth = getAuth(app);
const Activity = () => {
  const [user, setUser] = useState({});
  //provider for Google
  const googleProvider = new GoogleAuthProvider();
  //Provider for Github
  const githubProvider = new GithubAuthProvider();
  //provider for Facebook
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  const handleGoogleSignOut = () => {
    signOut(auth).then(() => {
      setUser({}).catch(() => {
        setUser({});
      });
    });
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-medium text-blue-100">
        This is activity section
      </h2>

      <div className="max-w-sm">
        <Card>
          {user.email && (
            <div>
              <img src={user.photoURL} alt="" />
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                User Name:{user.displayName}
              </h3>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Email: {user.email}
              </p>
            </div>
          )}

          {user.email ? (
            <Button onClick={handleGoogleSignOut}>Google Sign Out</Button>
          ) : (
            <>
              {/* // " <> </>" this is react freagment use to avouid creat new dom element */}
              <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
              <Button onClick={handleGithubSignIn}>GitHub Sign In</Button>
              <Button onClick={handleFacebookSignIn}>Facebook Sign In</Button>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Activity;
// callback url for facebook firebase :https://my-school-firebase-auth.firebaseapp.com/__/auth/handler
