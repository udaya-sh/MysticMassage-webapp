import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  var contact = useState("contact");

  return (
    <div
      id="contact"
      className="relative text-color  space-y-10 py-16  md:px-[300px] bg-[#222222] "
    >
      <div className="max-w-[1240px] gap-8 text-color ">
        <h1 className="text-[50px] py-20 my-4 primary-color uppercase font-extrabold ">
          Contact
        </h1>
        <p>
          At the moment, making appointments is only possible via Whatsapp.
          Reach out for any other inquiries and questions using the contact form
          below.
        </p>
      </div>

      <div className=" md:grid md:grid-cols-2 gap-x-72 ">
        <form action="">
          <div className="md:grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className=" text-color " htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className=" rounded-lg p-3 flex  bg-[#252422]"
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-color " htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className=" rounded-lg p-3 flex border-gray-300 bg-[#252422]"
              />
            </div>

            <div className="flex flex-col">
              <label className=" text-color " htmlFor="number">
                Phone Number
              </label>
              <input
                type="text"
                className=" rounded-lg p-3 flex border-gray-300 bg-[#252422]"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className=" text-color" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              className=" rounded-lg p-3 flex border-gray-300 bg-[#252422]"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className=" text-color " htmlFor="message">
              Message
            </label>
            <textarea className=" h-60 rounded-lg p-3 flex bg-[#252422] " />
          </div>
          <Button title="Send Message"></Button>
        </form>
        <div className=" ">
          <div className=" border-[1px] border-[#e65728]  bg-[#252422] relative top-[150px] text-center p-10 ">
            <h1 className="font-bold text-[20px]">Contact Information</h1>
            <p>MysticMassageLondon@gmail.com</p>
            <p>Company number: +44 7495 094691 </p>
            <Link href="https://api.whatsapp.com/send?phone=447495094696">
              <button className="bg-[#252422] p-3 border  border-[#E65728] rounded-lg">
                Whatsapp Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
