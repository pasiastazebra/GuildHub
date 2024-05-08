"use client";

import { signIn } from "next-auth/react";
import "@/styles/loginForm.scss";

//! For sure needs to be redesigned, my eyes hurts

const LoginForm: React.FC = () => {
  return (
    <div className="app">
      <div className="wrapper top">
        <h1 className="txt-title">
          Please use any of the options below to continue.
        </h1>
      </div>

      <div className="wrapper bot">
        <a className="wrapper-bot-link" href="/faq">
          Worried about privacy?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
