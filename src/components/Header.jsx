'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header() {

  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center py-6 ">
      <div className="font-bold text-xl"><Link href="/">AT</Link></div>
      <div className="bg-[#161B2A] rounded-2xl gap-4 flex px-2 py-2 text-sm shadow-glow">
        <Link href="/"><div className={`rounded-xl px-2 py-1 hover:bg-[#2B4A5C] ${pathname === '/' ? 'bg-[#2B4A5C]' : ''}`}>Home</div></Link>
        <Link href="/work"><div className={`rounded-xl px-2 py-1 hover:bg-[#2B4A5C] ${pathname === '/work' ? 'bg-[#2B4A5C]' : ''}`}>Work</div></Link>
        <Link href="/about"><div className={`rounded-xl px-2 py-1 hover:bg-[#2B4A5C] ${pathname === '/about' ? 'bg-[#2B4A5C]' : ''}`}>About</div></Link>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/oiibar?tab=repositories" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/aibar-tolegenov-167a962a3/" target='_blank'><FaLinkedin /></a>
        <a href="mailto:quovein@gmail.com" target='_blank'><MdEmail /></a>
      </div>
    </header>
  );
}
