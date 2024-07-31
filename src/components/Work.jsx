"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function WorkSection() {
  return (
    <section className="flex flex-col justify-center gap-4 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-6xl font-bold">Work</h2>
        <button className="btn mt-4 md:mt-0">
          <Link href="/work">View all</Link>
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl px-4">
        {projects.slice(0, 2).map((project, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/2 h-80 bg-[#2B4A5C] rounded-xl cursor-pointer transition-transform transform hover:scale-105 overflow-hidden"
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
            <div className="absolute top-2 left-2 text-white flex items-center gap-2">
              <p className="bg-[#090A11] px-2 py-1 rounded-xl text-sm md:text-base">
                {project.name}
              </p>
              {project.inProgress && (
                <p className="bg-red-600 px-2 py-1 rounded-xl text-sm md:text-base">
                  In Progress
                </p>
              )}
            </div>
            {project.gh && (
              <a
                href={project.gh}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 text-white hover:text-gray-300 transition-transform transform hover:scale-105"
                aria-label="GitHub Repository"
              >
                <FaGithub size={24} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
