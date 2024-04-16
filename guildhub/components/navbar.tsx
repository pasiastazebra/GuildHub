"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/styles/navbar.scss";

const Navbar = () => {
  //![BUG] this scrolling is so awful, need to fix it
  const [scrolled, setScrolled] = useState(false);
  const pathname: string = usePathname();

  const handeScroll = () => {
    const offset = window.scrollY;

    if (offset > 30) {
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
          <a
            href="/features"
            className={
              pathname === "/features" ? "navbar-link active" : "navbar-link"
            }
          >
            <p className="navbar-link-text">Features</p>
          </a>
          <a
            href="/faq"
            className={
              pathname === "/faq" ? "navbar-link active" : "navbar-link"
            }
          >
            <p className="navbar-link-text">FAQ</p>
          </a>
          <a
            href="/pricing"
            className={
              pathname === "/pricing" ? "navbar-link active" : "navbar-link"
            }
          >
            <p className="navbar-link-text">Pricing</p>
          </a>
          <a
            href="/login"
            className={
              pathname === "/login" ? "navbar-link active" : "navbar-link"
            }
          >
            <p className="navbar-link-text">Log in</p>
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
