import React from "react";
import Header from "../components/Header";

const services = () => {
  return (
    <div className="  ">
      <Header></Header>
      <div
        id="therapists"
        className="relative z-40 -mt-[0vh] min-h-screen text-color  space-y-10 py-16  md:px-[300px] bg-[#222222] "
      >
        <div className="max-w-[1240px] gap-8 text-color ">
          <h1 className="text-[50px] py-4 my-4 primary-color uppercase ">
            Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 md:p-6 ">
            <div className=" md:w-[580px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
              <div className=" flex justify-between p-5 bg-[#252422]">
                <div>
                  <p>Sweedish massage</p>
                  <p className=" text-[20px] text-color font-extrabold capitalize  ">
                    Swedish massage is one of the most commonly used forms of
                    massage . The term Swedish massage is mainly used in
                    Dutch-speaking and English-speaking [1] countries. Outside
                    (but also within) the term classical massage is mainly (or
                    also) used. Within Swedish massage, the masseur [2] works
                    almost exclusively with the hands. Techniques that are
                    performed with forearms and/or elbows (or with other means
                    such as feet) - which do occur in other forms of massage -
                    are not common in Swedish massage. The Swedish massage
                    distinguishes itself by starting from the anatomy and blood
                    flow direction. In addition to relaxation, good blood
                    circulation and help with self-healing are the main goals.
                    Oil, cream or lotion can be used to reduce skin resistance.
                    It is important to rub it warmly in the palm of your hand
                    first and not to put it cold on the skin to be massaged.
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:w-[580px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
              <div className=" flex justify-between p-5 bg-[#252422]">
                <div>
                  <p className=" text-[20px] text-color font-extrabold capitalize  ">
                    Deep tissue massage
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:w-[580px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
              <div className=" flex justify-between p-5 bg-[#252422]">
                <div>
                  <p className=" text-[20px] text-color font-extrabold capitalize  ">
                    4 hands massage
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:w-[580px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
              <div className=" flex justify-between p-5 bg-[#252422]">
                <div>
                  <p className=" text-[20px] text-color font-extrabold capitalize  ">
                    Poker table massage
                  </p>
                </div>
              </div>
            </div>
            <div className=" md:w-[580px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
              <div className=" flex justify-between p-5 bg-[#252422]">
                <div>
                  <p className=" text-[20px] text-color font-extrabold capitalize  ">
                    VIP massage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
