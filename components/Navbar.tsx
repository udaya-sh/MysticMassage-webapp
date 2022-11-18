import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const hideNav = () => {
    setNav(false);
  };
  return (
    <div className=" fixed w-full h-30   z-[100] bg-[#181818]  ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className=" opacity-75  transition hover:opacity-100  cursor-pointer"
            src="/logo-transparent.svg"
            width={150}
            height={150}
            alt="Mystic massage London Logo"
          />
        </Link>

        <div>
          <ul className="hidden items-center space-x-10  justify-center md:flex  py-5 ">
            <Link href="/">
              <li className=" headerLink ">Home</li>
            </Link>
            <Link href="/#about">
              <li className=" headerLink">About</li>
            </Link>
            <Link href="/services">
              <li className=" headerLink">Services</li>
            </Link>
            <Link href="/prices">
              <li className=" headerLink ">Prices</li>
            </Link>
            <Link href="/#therapists">
              <li className=" headerLink ">Therapists</li>
            </Link>
            <Link href="/Contact">
              <li className=" headerLink ">Contact</li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer headerLink"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#181818]/70 "
            : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#181818] p-3 ease-in duration-500 border-r-[1px] border-[#E65728] "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <Image
                  className=" opacity-75  transition hover:opacity-100 cursor-pointer"
                  src="/logo-transparent.svg"
                  width={97}
                  height={95}
                  alt="Mystic massage London Logo"
                />
              </Link>

              <div
                onClick={handleNav}
                className="  opacity-75  transition hover:opacity-100 rounded-full headerLink shadow-lg border-[1px] border-[#E65728] shadow-gray-400 p-3 cursor-pointer ml-20 "
              >
                <AiOutlineClose className=" " size={10} />
              </div>
            </div>
            <div>
              <p></p>
            </div>
            <div className="py-20  flex flex-col">
              <ul className="headerLink space-y-8">
                <Link href="/">
                  <li onClick={handleNav}>Home</li>
                </Link>
                <Link href="/#about">
                  <li onClick={handleNav}>About</li>
                </Link>
                <Link href="/services">
                  <li onClick={handleNav}>Services</li>
                </Link>
                <Link href="/prices">
                  <li onClick={handleNav}>Prices</li>
                </Link>
                <Link href="/#therapists">
                  <li onClick={handleNav}>Therapists</li>
                </Link>
                <Link href="/Contact">
                  <li onClick={handleNav}>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
