"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Icon from "@/app/assets/icons/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 60) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });
  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="w-full flex justify-center fixed top-3 z-50 "
    >
      <nav
        className="flex justify-center w-[60%] border p-1 py-2 bg-primary text-secondary
      gap-2 rounded-md"
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="md:hidden block z-20 bg-none rounded-full bg-secondary opacity-100">
              <Image src={Icon.src} alt="logo" width={25} height={25}></Image>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="playfair-font">
            <DropdownMenuItem className="font-bold ">
              <div>
                <Link href="#">Home</Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-bold ">
              <div>
                <Link href="#">About</Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-bold ">
              <div>
                <Link href="#">Projects</Link>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex hidden w-full  justify-evenly items-center gap-3 pr-3 ">
          <Link
            href="#hero"
            className="hover:text-white transition font-semibold "
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-white transition font-semibold "
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-white transition font-semibold "
          >
            Projects
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}

export default Header;
