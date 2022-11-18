import Link from "next/link";
import React, { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { IoMdSend } from "react-icons/io";

const contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors]: any = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors: any = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };
  return (
    <div
      id="contact"
      className="relative text-color  space-y-10 py-16  md:px-[300px] bg-[#222222] "
    >
      <div className="max-w-[1240px] gap-8 text-color ">
        <h1 className="text-[50px] py-20 my-4 primary-color uppercase font-extrabold ">
          Contact
        </h1>
        <p className="text-[20px] text-color md:text-left font-bold  md:w-[40%]">
          At the moment, making appointments is only possible via WhatsApp.
          Reach out for any other inquiries and questions using the contact form
          below.
        </p>
      </div>

      <div className=" lg:grid lg:grid-cols-2 gap-x-72 ">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-[#252422] "
        >
          <h1 className="text-2xl font-bold">Send a message</h1>

          <label htmlFor="fullname" className=" font-light mt-8 ">
            Full name<span className="text-red-500 ">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4   "
          />
          {errors?.fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}

          <label htmlFor="email" className=" font-light mt-4 ">
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4   font-light "
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label htmlFor="subject" className=" font-light mt-4 ">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4   font-light "
          />
          {errors?.subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}
          <label htmlFor="message" className=" font-light mt-4 ">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-5 pl-4   font-light "
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#e65728] text-gray-50 font-light rounded-md text-lg flex flex-row items-center "
            >
              <p className="mr-2"> {buttonText}</p>
              <IoMdSend />
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
        <div className=" ">
          <div className=" border-[1px] border-[#e65728]  bg-[#252422] relative top-[150px] text-center p-10 ">
            <h1 className="font-bold text-[20px]">Contact Information</h1>
            <p>HayatiMobileMassage@gmail.com</p>
            <p>Company number: +44 7415 720279 </p>
            <Link href="https://api.whatsapp.com/send?phone=447415720279">
              <button className=" p-2 border mt-2 bg-[#e65728]  border-[#e65728] rounded-lg">
                <div className="flex flex-row ">
                  <SiWhatsapp color=" #d1e5ec" size={25} />
                  <p className="ml-2"> Whatsapp Booking</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
