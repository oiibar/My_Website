"use client";

import { useState } from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import Work from "@/components/Work";
import { experience } from "@/data/experience";
import { LuDownload } from "react-icons/lu";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex flex-col justify-center gap-4 py-24">
      <div className="text-center flex flex-col justify-center gap-2 items-center">
        <h2 className="text-6xl font-bold">About</h2>
        <p>Here you can learn more about me and my background</p>
        <button className="btn">
          <a href="/CV.pdf" download="CV" className="flex gap-2 items-center">
            CV <LuDownload />
          </a>
        </button>
        <div className="relative h-96 w-80 rounded-xl overflow-hidden">
          <Image
            src="/assets/me1.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
      </div>

      <section className="flex justify-center items-center py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-16 sm:gap-24">
          <div className="flex flex-col">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer p-4 transition-border duration-100 ease-in-out rounded-md ${
                  activeIndex === index
                    ? "border-l-4 border-[#2B4A5C] bg-gray-800"
                    : "hover:border-l-4 hover:border-[#2B4A5C]"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-400 text-sm">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="border-2 border-gray-300 p-6 bg-gray-800 text-white rounded-md w-full sm:w-80">
            {experience[activeIndex]?.text.map((item, index) => (
              <p key={index} className="mb-2 last:mb-0 text-lg">
                &bull; {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Work />
      <Contact />
    </section>
  );
}
