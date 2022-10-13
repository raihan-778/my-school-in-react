import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "flowbite-react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import app from "../Firebase/Firebase.init";
import "./Main";

const auth = getAuth(app);
const Main = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  return (
    <div>
      <Header></Header>
      <Button onClick={handleGoogleSignIn}>Google Sign In</Button>

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
