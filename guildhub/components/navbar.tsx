"use client";

import { useState, useEffect } from "react";
import "@/styles/navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handeScroll = () => {
    const offset = window.scrollY;

    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handeScroll);
  }, []);
  let x = ["navbar"];
  if (scrolled) {
    x.push("sticky");
  }
  return (
    <nav className={x.join(" ")}>
      <div className="navbar-wrapper">
        <span className="navbar-logo">
          <img src="/logo.svg" alt="" className="navbar-icon" />
          <a href="/" className="navbar-link">
            GuildHub
          </a>
        </span>
        <span className="navbar-links">
          <a href="/features" className="navbar-link">
            Features
          </a>
          <a href="/faq" className="navbar-link">
            FAQ
          </a>
          <a href="/pricing" className="navbar-link">
            Pricing
          </a>
          <a href="/login" className="navbar-link">
            Login
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
