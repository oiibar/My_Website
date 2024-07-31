import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Work from "@/components/Work";

export default function Home() {
  return (
    <section className="py-16">
      <div className="flex gap-4 justify-center items-center">
        <Link
          href="/about"
          className="rounded-2xl overflow-hidden h-96 w-80 object-cover hidden md:block transition-transform transform hover:scale-105"
        >
          <Image
            src="/assets/me1.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </Link>
        <div className="flex flex-col gap-2 max-w-lg">
          <h2 className="text-6xl font-bold">I'm Tolegenov Aibar</h2>
          <div className="text-xl">
            <p>
              I'm a frontend web developer who is passionate to build modern &
              responsive web apps
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#2B4A5C] rounded-xl px-2 py-1">JS/TS</div>
            <div className="bg-[#2B4A5C] rounded-xl px-2 py-1">React/Vue</div>
            <div className="bg-[#2B4A5C] rounded-xl px-2 py-1">Node/Nest</div>
          </div>
        </div>
      </div>
      <Work />
      <Contact />
    </section>
  );
}
