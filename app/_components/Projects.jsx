import Image from "next/image";
import React from "react";
import projectImg from "@/app/assets/images/projectimg.png";
import { GemIcon, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    name: "Nextjs - Portfolio",
    github: "https://github.com/AryanN77/Nextjs-Portfolio",
  },
  {
    name: "Nextjs - Ecommerce App",
    github: "https://github.com/AryanN77/Nextjs-Ecommerce-I",
  },
  {
    name: "GRIP Internship Project",
    github: "https://github.com/AryanN77/GRIP-Internship",
  },
];

function Projects() {
  return (
    <div className="bg-white h-screen relative z-0">
      <div className="w-full flex justify-center mt-0">
        <Image
          src={projectImg.src}
          width={100}
          height={100}
          alt="about-img"
          className="size-40 autoRotate"
        />
      </div>
      <div className="w-full px-4 flex flex-col gap-1 mt-0">
        <div className="flex justify-start">
          <h1 className="playfair-font text-3xl uppercase">Projects</h1>
        </div>
        <div className="flex flex-col gap-2 playfair-font autoShow ">
          {projects.map((project, index) => (
            <div
              className="w-full h-[100px] font-semibold border-2 border-black border-l-0 border-r-0 flex justify-between items-center hover:bg-black hover:text-white transition-all duration-200
            hover:-translate-y-1"
              key={index}
            >
              <div className="flex gap-2">
                <GemIcon className="font-normal" />
                <span className="inline-block font-bold"> | </span>
                <p>{project.name}</p>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="playfair-font font-semibold">
                    <DropdownMenuItem>
                      <a
                        href={`${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                      <a href="">Open Site</a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
