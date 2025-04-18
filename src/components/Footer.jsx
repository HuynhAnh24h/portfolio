// src/components/Footer.jsx
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-200 text-center py-10 relative" id="footer">
      <div className="text-2xl font-semibold flex justify-center items-center gap-2">
        <span className="text-green-500">{`<`}</span>
        Otobi.developer
        <span className="text-green-500">{`/>`}</span>
      </div>

      <div className="flex justify-center gap-6 my-6 text-xl">
        <FaXTwitter className="hover:text-green-400 transition" />
        <FaInstagram className="hover:text-green-400 transition" />
        <FaLinkedin className="hover:text-green-400 transition" />
        <FaFacebookF className="hover:text-green-400 transition" />
      </div>

      <div className="flex justify-center gap-10 text-lg mt-6">
        <a href="#about" className="hover:text-green-400 transition">About Me</a>
        <a href="#resume" className="hover:text-green-400 transition">Resume</a>
        <a href="#contacts" className="hover:text-green-400 transition">Contacts</a>
      </div>
    </footer>
  );
};

export default Footer;

