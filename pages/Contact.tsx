import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  var contact = useState("contact");

  return (
    <div
      id="contact"
      className="relative z-40 -mt-[0vh] min-h-screen text-color  space-y-10 py-16  md:px-[300px] bg-[#252422] "
    >
      <div className="bg-[#e0ab41]"></div>
      <div className="max-w-[1240px] gap-8 text-color ">
        <h1 className="text-[50px] py-4 my-4 primary-color uppercase ">
          Contact
        </h1>
        <p>
          At the moment, making appointments is only possible by phone. Reach
          out for other queries and questions.
        </p>
      </div>

      <div className=" grid grid-cols-2 gap-x-72 ">
        <form action="">
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className=" text-color " htmlFor="name">
                {" "}
                Name
              </label>
              <input
                type="text"
                className=" rounded-lg p-3 flex  bg-[#222222]"
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-color " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className=" rounded-lg p-3 flex border-gray-300 bg-[#222222]"
              />
            </div>

            <div className="flex flex-col">
              <label className=" text-color " htmlFor="number">
                Phone Number
              </label>
              <input
                type="text"
                className=" rounded-lg p-3 flex border-gray-300 bg-[#222222]"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className=" text-color" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              className=" rounded-lg p-3 flex border-gray-300 bg-[#222222]"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className=" text-color " htmlFor="message">
              Message
            </label>
            <textarea className=" h-60 rounded-lg p-3 flex bg-[#222222] " />
          </div>
          <Button title="Send Message"></Button>
        </form>
        <div className=" ">
          <div className=" border-[1px] border-[#e65728]  bg-[#222222] relative top-[150px] text-center p-10 ">
            <h1 className="font-bold text-[20px]">Contact Information</h1>
            <p>MysticMassageLondon@gmail.com</p>
            <p>Company number: +44 7495 094691 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
