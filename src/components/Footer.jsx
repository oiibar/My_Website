import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-6 text-white">
      <Link href='/'><div>© 2024 Aibar Tolegenov</div></Link>
      <div className="flex gap-4 text-xl">
      <a href="https://github.com/oiibar?tab=repositories" target='_blank'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/aibar-tolegenov-167a962a3/" target='_blank'><FaLinkedin /></a>
        <a href="mailto:quovein@gmail.com" target='_blank'><MdEmail /></a>
      </div>
    </footer>
  );
}
