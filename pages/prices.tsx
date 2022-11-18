import React from "react";

const prices = () => {
  return (
    <div
      id="services"
      className="relative text-color  space-y-10 py-16  md:px-[300px] bg-[#222222] "
    >
      <div className="max-w-[1240px] gap-8 text-color ">
        <h1 className="text-[50px] py-20 my-4 primary-color uppercase font-extrabold ">
          Prices
        </h1>
        <div className=" md:w-[90%] px-5 h-screen m md:mr-20 md:mb-10  overflow-hidden">
          <div className=" flex justify-between p-5 bg-[#252422]">
            <div>
              <p className=" text-[30px] text-color text-center font-bold   ">
                Minutes
              </p>
            </div>
            <div>
              <p className=" text-[30px] text-color text-center font-bold   ">
                Price
              </p>
            </div>
          </div>{" "}
          <div className=" flex justify-between p-5 bg-[#252422]">
            <div>
              <p className=" text-[20px] text-color text-center font-bold   ">
                60 min
              </p>
            </div>
            <div>
              <p className=" text-[20px] text-color text-center font-bold   ">
                70£
              </p>
            </div>
          </div>
          <div className=" flex justify-between p-5 bg-[#252422]">
            <div>
              <p className=" text-[20px] text-color text-center font-bold   ">
                90 min
              </p>
            </div>
            <div>
              <p className=" text-[20px] text-color text-center font-bold   ">
                90£
              </p>
            </div>
          </div>{" "}
          <div className=" flex justify-between p-5 bg-[#252422]">
            <div>
              <p className=" text-[20px] text-color text-center font-bold   ">
                120 min
              </p>
            </div>
            <div>
              <p className=" text-[20px] text-color text-center font-bold   ">
                130£
              </p>
            </div>
          </div>
          <p className=" text-[20px] text-color text-center font-bold   ">
            Each booking additional 30£ for expenses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default prices;
