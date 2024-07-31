"use client";

import { FaGithub } from "react-icons/fa";
import Contact from "@/components/Contact";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <section className="flex flex-col justify-center gap-4 py-24 items-center">
      <div className="text-center">
        <h2 className="text-6xl font-bold">Work</h2>
        <p>
          See my most recent projects below to get an idea of my past
          experience.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-80 bg-[#2B4A5C] rounded-xl cursor-pointer overflow-hidden"
            onClick={() => window.open(project.url, "_blank")}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            )}
            <div className="absolute top-2 left-2 text-white flex items-center">
              <p className="mr-2 bg-[#090A11] px-2 py-1 rounded-xl">
                {project.name}
              </p>
              {project.inProgress && (
                <p className="bg-red-600 px-2 py-1 rounded-xl">In Progress</p>
              )}
            </div>
            {project.gh && (
              <a
                href={project.gh}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute bottom-2 right-2 transition-transform transform hover:scale-105 ${
                  project.name === "Connection" ||
                  project.name === "Cat Wiki" ||
                  project.name === "Talimger"
                    ? "text-black"
                    : "text-white"
                } hover:text-gray-300`}
                aria-label="GitHub Repository"
              >
                <FaGithub size={24} />
              </a>
            )}
          </div>
        ))}
      </div>
      <Contact />
    </section>
  );
}
