import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-[100vh] max-w-[1350px] items-center justify-between px-9  ">
      <div className="space-y-8">
        <h1 className="space-y-3 text-4xl font-semibold tracking-wide md:text-5xl lg:text-6xl text-opacity-25 text-color ">
          <span className="text-transparent bg-gradient-to-r from-[#f0d8d8] to-[#E65728] bg-clip-text uppercase ">
            Healing
          </span>
          <span className="block">Physically</span>
          <span className="block">And Spiritually</span>
          <span className="block">Through Mystic Massage</span>
        </h1>

        <div className="space-x-3   ">
          <Button title=" Meet Our Therapists" />
          {/* <a className=" text-color link font-serif mt-11 ">
            Meet Our Therapists{" "}
          </a> */}
        </div>
      </div>

      {/* <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px] "></div> */}
    </section>
  );
}
