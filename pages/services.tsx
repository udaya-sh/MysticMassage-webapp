import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const services = () => {
  return (
    <div
      id="services"
      className="relative text-color  space-y-10 py-16  md:px-[300px] bg-[#222222] "
    >
      <div className="max-w-[1240px] gap-8 text-color ">
        <h1 className="text-[50px] py-20 my-4 primary-color uppercase font-extrabold ">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 md:p-6 ">
          <div className=" md:w-[500px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
            <div className=" flex justify-between p-5 bg-[#252422]">
              <div>
                <p className=" text-[30px] text-color text-center font-bold   ">
                  Sweedish massage
                </p>
                <p className=" text-[20px] text-color font-semibold   ">
                  Swedish massage is one of the most commonly used forms of
                  massage . The term Swedish massage is mainly used in
                  Dutch-speaking and English-speaking countries. Outside the
                  term classical massage is mainly used. Within Swedish massage,
                  the masseur works almost exclusively with the hands.
                  Techniques that are performed with forearms and/or elbows (or
                  with other means such as feet) - which do occur in other forms
                  of massage - are not common in Swedish massage. The Swedish
                  massage distinguishes itself by starting from the anatomy and
                  blood flow direction. In addition to relaxation, good blood
                  circulation and help with self-healing are the main goals.
                  Oil, cream or lotion can be used to reduce skin resistance. It
                  is important to rub it warmly in the palm of your hand first
                  and not to put it cold on the skin to be massaged.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-[500px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
            <div className=" flex justify-between p-5 bg-[#252422]">
              <div>
                <p className=" text-[30px] text-color text-center font-bold   ">
                  Deep tissue massage
                </p>
                <p className=" text-[20px] text-color font-semibold   ">
                  Deep tissue massages are used to break up scar tissue and
                  break down muscle adhesions (the “knots” that we feel in our
                  muscles are muscle adhesions, which are bands of rigid and
                  painful muscle tissue). These knots can inhibit our
                  circulation and cause pain and inflammation.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-[500px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
            <div className=" flex justify-between p-5 bg-[#252422]">
              <div>
                <p className=" text-[30px] text-color text-center font-bold   ">
                  4 hands massage
                </p>
                <p className=" text-[20px] text-color font-semibold   ">
                  A 4 hand massage is a kind of massage that has 2 masseurs or
                  therapists for one client. They practice synchronized
                  technical massage movements and apply the same pressure and
                  pace on both sides of the body (left and right ) which
                  increases the level of muscle relaxation and massage benefits.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-[500px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
            <div className=" flex justify-between p-5 bg-[#252422]">
              <div>
                <p className=" text-[30px] text-color text-center font-bold   ">
                  Trigger point massage
                </p>
                <p className=" text-[20px] text-color font-semibold   ">
                  Sometimes confused with pressure point massage, this involves
                  deactivating trigger points that may cause local pain or refer
                  pain and other sensations, such as headaches, in other parts
                  of the body. Manual pressure, vibration, injection, or other
                  treatment is applied to these points to relieve myofascial
                  pain. Trigger points were first discovered and mapped by Janet
                  G. Travell (President Kennedy's physician) and David Simons.
                  Trigger points have been photomicrographed and measured
                  electrically and in 2007 a paper was presented showing images
                  of Trigger Points using MRI. These points relate to
                  dysfunction in the myoneural junction, also called
                  neuromuscular junction, in muscle, and therefore this
                  technique is different from reflexology, acupressure and
                  pressure point massage.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-[500px] md:hover:scale-105 transition-transform duration-200 ease-in-out md:mr-20 md:mb-10 md:hover:border-[1px] border-[#E65728] rounded-lg cursor-pointer overflow-hidden">
            <div className=" flex justify-between p-5 bg-[#252422]">
              <div>
                <p className=" text-[30px] text-color text-center font-bold   ">
                  Thai massage
                </p>
                <p className=" text-[20px] text-color font-semibold   ">
                  Known in Thailand as Nuat phaen boran, meaning
                  "ancient/traditional massage", traditional Thai massage is
                  generally based on a combination of Indian and Chinese
                  traditions of medicine. Thai massage combines both physical
                  and energetic aspects. It is a deep, full-body massage
                  progressing from the feet up, and focusing on sen or energy
                  lines throughout the body, with the aim of clearing blockages
                  in these lines, and thus stimulating the flow of blood and
                  lymph throughout the body. It draws on yoga, acupressure and
                  reflexology. Thai massage is a popular massage therapy that is
                  used for the management of conditions such as musculoskeletal
                  pain and fatigue. Thai Massage involves a number of stretching
                  movements that improve body flexibility, joint movement and
                  also improve blood circulation throughout the body. In one
                  study scientists found that Thai Massage showed comparable
                  efficacy as the painkiller ibuprofen in the reduction of joint
                  pain caused by osteoarthritis of the knee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
