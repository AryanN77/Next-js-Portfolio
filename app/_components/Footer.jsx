import Image from "next/image";
import React from "react";
import grainImage from "@/app/assets/images/grain.jpg";
import Gmail from "@/app/assets/icons/gmail.svg";
import GitHub from "@/app/assets/icons/github.svg";
import LinkedIn from "@/app/assets/icons/linkedin.svg";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

function Footer() {
  return (
    <div className="h-[150px] w-full pt-6 flex justify-evenly bg-secondary relative z-0 tracking-wider">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="playfair-font flex flex-col items-center gap-2 font-semibold">
        <h2>Thank you for stopping by</h2>
        <h2 className="font-bold">Let's Connect</h2>
        <div className="flex gap-2">
          <AlertDialog>
            <AlertDialogTrigger>
              <Image src={Gmail.src} width={20} height={20} alt="gmail" />
            </AlertDialogTrigger>
            <AlertDialogContent className="playfair-font font-semibold">
              <AlertDialogHeader>
                <AlertDialogTitle>Gmail</AlertDialogTitle>
                <AlertDialogDescription className="text-primary">
                  aryannaithani77@gmail.com
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <a
            href="https://github.com/AryanN77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GitHub.src} width={20} height={20} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-naithani-2a8a93244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedIn.src} width={20} height={20} alt="linkedin" />
          </a>
        </div>
        <p className="flex items-center">© 2024 By Aryan Naithani</p>
      </div>
    </div>
  );
}

export default Footer;
