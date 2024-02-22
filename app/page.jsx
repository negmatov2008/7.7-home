"use client";
import React from "react";
const contents = [
  {
    logo: "./logo1.svg",
    text: "./cont1.png",
  },
  {
    logo: "./logo2.svg",
    text: "./cont2.png",
  },
  {
    logo: "./logo3.svg",
    text: "./cont3.png",
  },
];

function page() {
  const hanleShow = () => {
    const imgEl2 = document.getElementById("img2");
    const imgEl3 = document.getElementById("img3");
    imgEl2.classList.remove("hidden");
    imgEl3.classList.remove("hidden");
  };
  return (
    <div className="max-w-full">
      <img src="./bg.png" width={780} height={580} className="absolute -z-10 top-0 right-0" alt="" />
      <div className=" flex justify-between constainer max-w-[1110px] font-[DM Serif Display] mx-auto items-center ">
        <div className="max-w-[546px]">
          <h1 className="text-[72px] leading-[72px]  font-[400] tracking-tighter mb-4 text-[#36536B]">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="max-w-[445px] relative ">
            <input
              type="text"
              placeholder="Enter email address"
              className="py-3 rounded-xl text-bold placeholder:font-bold placeholder:text-[15px] placeholder:opacity-[50%] text-[#36536B] bg-[#FBFCFE] px-4"
            />
            <button className="py-3 px-4 bg-[#BA4270] rounded-3xl active:bg-[#DA6D97] z-10  absolute right-14 text-white">
              Schedule a Demo
            </button>
          </div>
          <div className="text-[#36536B] mt-2 font-[15px] opacity-[70%]">
            Have any questions? <span className="font-bold ">Contact Us</span>
          </div>
        </div>
        <img src="./phone.png" width={263} height={500} className="ml-10" alt="" />
      </div>
      <button
        onClick={() => {
          hanleShow();
        }}
        className="w-full mb-12 relative"
      >
        <img id="img" width={1140} height={472} src="./hero.png" className="mx-auto" alt="" />
        <img
        width={445} height={272}
          id="img2"
          src="./active1.png"
          className="z-1 absolute top-[22%] hidden left-[10%]"
          alt=""
        />
        <img
        width={563} height={103}
          id="img3"
          src="./active3.png"
          className="z-3 absolute top-[35%] hidden right-[10%]"
          alt=""
        />
      </button>
      <div className="max-w-[1015px] mx-auto container flex justify-between items-center">
        <img width={445} height={384} src="./code.png" alt="" />
        <img width={445} height={164} src="./text.png" alt="" />
      </div>
      <div className="max-w-full pl-[100px] mb-12 mx-auto flex justify-between items-center">
        <img width={445} height={136} src="./text2.png" alt="" />
        <img width={800} height={780} src="./bigphone.png" alt="" />
      </div>
      <div className="flex max-w-[1110px]  mx-auto justify-between">
        {contents.map((c) => (
          <div className="flex max-w-[350px] gap-4 flex-col justify-center">
            <img
              width={106}
              height={106}
              className="mx-auto"
              src={c.logo}
              alt=""
            />
            <img src={c.text} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
