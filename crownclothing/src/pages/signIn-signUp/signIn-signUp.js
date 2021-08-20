import React from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";

import "./signIn-signUp.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
