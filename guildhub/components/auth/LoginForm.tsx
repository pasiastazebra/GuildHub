"use client";

import { signIn } from "next-auth/react";
import "@/styles/loginForm.scss";

//! For sure needs to be redesigned, my eyes hurts

const LoginForm: React.FC = () => {
  return (
    <div className="app">
      <div className="uperwrapper">
        <div className="wrapper top">
          <h1 className="txt-title">Welcome back</h1>
          <p className="txt-desc">Tell us more about you</p>
        </div>
        <div className="wrapper mid">
          <form action="" className="login-form">
            <label htmlFor="tag" className="login-form-label">
              Access tag
            </label>
            <input
              name="tag"
              placeholder="access tag"
              type="text"
              className="login-form-input"
            ></input>
            <label htmlFor="token" className="login-form-label">
              Access token
            </label>
            <input
              name="token"
              placeholder="access token"
              type="text"
              className="login-form-input"
            ></input>
            <button className="login-form-button">Log in</button>
          </form>
        </div>
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
