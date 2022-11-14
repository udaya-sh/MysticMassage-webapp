import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  const [hamburgMenuClicked, setHamburgMenuClicked] = useState(false);
  const toggleHamburgMenuClicked = () => {
    setHamburgMenuClicked((current) => !current);
  };
  return (
    <header className="sticky top-0 z-30 flex w-full h-21 items-center justify-between  ">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative">
            <div className="cursor-pointer opacity-75 transition hover:opacity-100 ">
              <Image
                src="/logo-transparent.svg"
                width={150}
                height={150}
                alt="Mystic massage London Logo"
              />
            </div>
          </div>
        </Link>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu hidden items-center space-x-20 justify-center md:flex mx-10">
        <li>
          <a href="/" className="headerLink">
            Home
          </a>
        </li>
        <li>
          <a className="headerLink" href="/#about">
            About
          </a>
        </li>
        <li>
          <a className="headerLink" href="/services">
            Services
          </a>
        </li>
        <li>
          <a className="headerLink" href="/prices">
            Prices
          </a>
        </li>
        <li>
          <a href="/#therapists" className="headerLink">
            Therapists
          </a>
        </li>
        <li>
          <a href="/contact" className="headerLink">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
