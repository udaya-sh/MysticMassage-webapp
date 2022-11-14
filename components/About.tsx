import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen p-2 flex items-center justify-between py-16 md:px-[300px] bg-[#252422]"
    >
      <div className="max-w-[1240px] md:w-[600px] gap-8 text-color ">
        <div className=""></div>
        <h1 className=" text-left text-[50px] py-4 my-4 primary-color uppercase ">
          About
        </h1>
        <p className="text-[20px]  ">
          Massage is a relaxing and invigorating therapy that helps in relaxing
          major muscle groups and ease away most pain by manipulation of soft
          tissue. You can have massage delivered at home, hotel or office. With
          mystic mobile massage in London, the therapist can travel anywhere in
          the city and be with you within a couple of hours (depending on
          availability and distance) so please book in advance. Few of our
          therapists can host as well. Please text, call or WhatsApp to make an
          appointment for treatment.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default About;
