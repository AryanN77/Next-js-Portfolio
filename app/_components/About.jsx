"use client";
import React, { useState } from "react";
import aboutImg from "@/app/assets/images/aboutimg.png";
import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <div className="bg-secondary h-screen flex flex-col items-center justify-center relative z-0">
      <div className="absolute top-4 left-3 md:top-3 md:left-auto md:right-5  ">
        <a href="./resume.pdf" download="Aryan_CV.pdf">
          <button className="font-medium playfair-font z-10 bg-primary text-secondary px-3 py-1 rounded-full">
            Curriculum Vitae
          </button>
        </a>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 w-full h-full">
        <div className="md:col-span-1 pt-2 flex justify-center md:justify-start items-center md:items-start w-full">
          <Image
            src={aboutImg.src}
            alt="about-img"
            width={100}
            height={100}
            className="size-40 md:size-56 leftSlide pointer-events-none select-none"
          />
        </div>
        <div className="w-full pt-0 flex flex-col justify-center items-center md:items-start playfair-font gap-2 text-3xl md:text-6xl pb-8 md:col-span-3 h-full">
          <div className="w-full flex justify-center md:justify-start pr-20 md:pl-0 md:pr-4 autoBlur pointer-events-none select-none">
            <h2>ARYAN NAITHANI</h2>
          </div>
          <div className="pl-10 md:pl-20 autoBlur pointer-events-none select-none">
            <h2>WEB ENGINEER</h2>
          </div>
          <div className="w-full flex justify-center md:pr-32 autoBlur pointer-events-none select-none">
            <h2>PROBLEM SOLVER</h2>
          </div>
          <div className="w-full flex justify-center md:pl-12 autoBlur pointer-events-none select-none">
            <h2 className="uppercase">Tech Aficionado</h2>
          </div>
          <div className="w-full flex justify-center autoBlur">
            <h2 className="cursor-pointer">& MORE</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
