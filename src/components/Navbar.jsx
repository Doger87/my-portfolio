import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gray-900 text-white fixed w-full z-50 shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 font-semibold">
        {/* Left section: Name + Nav Links */}
        <div className="flex items-center space-x-6">
          <div className="text-x1.5 font-bold">David Sanchez</div>
          <a href="#home" className="hover:text-cyan-400 hidden sm:inline">Home</a>
          <a href="#about" className="hover:text-cyan-400 hidden sm:inline">About</a>
          <a href="#projects" className="hover:text-cyan-400 hidden sm:inline">Projects</a>
        </div>

        {/* Right section: Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Doger87"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-sanchez-lopez01/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:santiagosanchez2806@gmail.com"
            className="hover:text-cyan-400"
          >
            <MdEmail className="text-2xl" />
          </a>

          {/* Optional: Hamburger for mobile */}
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Optional: Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          <a href="#home" className="block hover:text-cyan-400">Home</a>
          <a href="#about" className="block hover:text-cyan-400">About</a>
          <a href="#projects" className="block hover:text-cyan-400">Projects</a>
          <div className="flex space-x-4 pt-2">
            <a href="https://github.com/Doger87" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl text-white hover:text-cyan-400" />
            </a>
            <a href="https://www.linkedin.com/in/david-sanchez-lopez01/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl text-white hover:text-cyan-400" />
            </a>
            <a href="mailto:santiagosanchez2806@gmail.com">
              <MdEmail className="text-xl text-white hover:text-cyan-400" />
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
