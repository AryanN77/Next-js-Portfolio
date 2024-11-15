import React from "react";
import heroBg from "@/app/assets/images/herobg.png";
import barCode from "@/app/assets/images/barcode.png";
import grainImage from "@/app/assets/images/grain.jpg";
import Image from "next/image";
function Hero() {
  return (
    <div className="bg-secondary relative h-screen z-0 ">
      <div className="flex absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent ,black 10%,black 90%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            src={heroBg.src}
            alt="bust"
            width={200}
            height={200}
            className="w-[90%] ml-5 md:ml-0 md:w-[100%] rounded-full mt-48 md:mt"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-center h-full w-full  py-16 relative">
        <div className="w-[60%] flex flex-col gap-2 md:gap-0 md:flex-row items-center md:items-start justify-between">
          <div className="anton-font flex flex-col gap-3 md:gap-2 text-5xl md:text-[4rem] items-center md:items-start text-wrap">
            <p>Aryan</p>
            <p>Naithani</p>
          </div>
          <div className="flex flex-col items-center md:items-end ">
            <Image
              className="w-[100px] hidden md:block"
              src={barCode.src}
              alt="barcode"
              width={30}
              height={10}
            />
            <h2 className="anton-font uppercase">Welcome</h2>
            <p className="anton-font uppercase">to my Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
