import React from "react";

const contents = ["./pr1.png", "./pr2.png", "./pr3.png"];

function page() {
  return (
    <div className="max-w-[1110px] mx-auto">
      <img src="./princ.png" className="absolute -z-10 top-0 right-0" alt="" />
      <img className="mt-[140px] mb-16" src="./Pricing.png" alt="" />
      <div className="flex gap-10">
        <div className="flex flex-col max-w-[350px]">
          <img width={350} height={192} src={contents[0]} alt="" />
          <div className="w-full h-[1px] bg-[#36536B] opacity-[25%] mt-6 mb-6"></div>
          <div className="flex flex-col gap-4">
            <img width={134} height={28} src="./a1.png" alt="" />
            <img
              width={73}
              height={28}
              className="w-[73px] h-[28px]"
              src="./a2.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[95px] h-[28px]"
              src="./a3.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[129px] h-[28px]"
              src="./a4.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[88px] h-[28px]"
              src="./a5.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[110px] h-[28px]"
              src="./a6.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[91px] h-[28px]"
              src="./a7.png"
              alt=""
            />
          </div>
          <div className="w-full h-[1px] bg-[#36536B] opacity-[25%] mt-6 mb-6"></div>
          <button className="py-3 px-6 rounded-3xl border border-[#36536B] text-[#36536B] max-w-[200px] active:bg-[#36536B] transition-[800ms] active:text-white  font-bold ">
            Request Access
          </button>
        </div>
        <div className="flex flex-col max-w-[350px]">
          <img width={350} height={192} src={contents[1]} alt="" />
          <div className="w-full h-[1px] bg-[#36536B] opacity-[25%] mt-6 mb-6"></div>
          <div className="flex flex-col gap-4">
            <img width={134} height={28} src="./a1.png" alt="" />
            <img
              width={73}
              height={28}
              className="w-[73px] h-[28px]"
              src="./a2.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[95px] h-[28px]"
              src="./a3.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[129px] h-[28px]"
              src="./b2.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[88px] h-[28px]"
              src="./b3.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[110px] h-[28px]"
              src="./a6.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[91px] h-[28px]"
              src="./a7.png"
              alt=""
            />
          </div>
          <div className="w-full h-[1px] bg-[#36536B] opacity-[25%] mt-6 mb-6"></div>
          <button className="py-3 px-6 rounded-3xl border border-[#36536B] text-[#36536B] max-w-[200px] active:bg-[#36536B] transition-[800ms] active:text-white  font-bold ">
            Request Access
          </button>
        </div>
        <div className="flex flex-col max-w-[350px]">
          <img width={350} height={192} src={contents[2]} alt="" />
          <div className="w-full h-[1px] bg-[#36536B] opacity-[25%] mt-6 mb-6"></div>
          <div className="flex flex-col gap-4">
            <img width={134} height={28} src="./a1.png" alt="" />
            <img
              width={73}
              height={28}
              className="w-[73px] h-[28px]"
              src="./a2.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[95px] h-[28px]"
              src="./a3.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[129px] h-[28px]"
              src="./b2.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[88px] h-[28px]"
              src="./b3.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[110px] h-[28px]"
              src="./c1.png"
              alt=""
            />
            <img
              width={134}
              height={28}
              className="w-[91px] h-[28px]"
              src="./c2.png"
              alt=""
            />
          </div>
          <div className="w-full h-[1px] bg-[#36536B] opacity-[25%] mt-6 mb-6"></div>
          <button className="py-3 px-6 rounded-3xl border border-[#36536B] text-[#36536B] max-w-[200px] active:bg-[#36536B] transition-[800ms] active:text-white  font-bold ">
            Request Access
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
