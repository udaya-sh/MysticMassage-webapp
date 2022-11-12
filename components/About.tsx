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
          Mystic Massage London specialises in healing of body and mind. It
          provides abundunce of services for it's client. It is possible because
          of our team. Our Team consits of massage therapist are expert in this
          field of work. Because of their expirince, they have the abilities to
          perform the mystic art of massage.
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default About;
