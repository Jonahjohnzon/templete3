import React, { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  const [show, setshow] = useState(false);
  return (
    <footer className=" w-full flex flex-col items-center border-b-[1px] border-b-blue border-opacity-20 mb-20">
      <div
        className=" text-white w-full py-20 xl:py-40 flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg3.avif')" }}
      >
        <h1 className=" text-5xl text-center sm:text-6xl font-bold mb-5">TAKEOFF FOR ASIA?</h1>
        <p className=" text-xl underline cursor-pointer">
          {" "}
          elizabeth@acmeconsulting.co
        </p>
      </div>
      <div className=" bg-white py-10 mb-10">
        <div className=" flex flex-col items-center justify-center">
          <div
            className=" text-green py-5  border-[1px] border-blue border-opacity-20 bg-white px-5 flex cursor-pointer  items-center"
            onClick={() => {
              setshow(!show);
            }}
          >
            {" "}
            {show ? (
              <GoArrowUp className=" mr-2" />
            ) : (
              <TfiPlus className=" mr-2" />
            )}{" "}
            Book a meeting
          </div>
          {show && (
            <div className=" w-[90%]  xl:w-[70%] 2xl:w-[50%] text-xl mt-40">
              <div>calender</div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
