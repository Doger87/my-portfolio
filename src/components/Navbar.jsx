import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Auto-close when clicking a link
  };

  return (
    <motion.nav
      className="bg-gray-900 text-white fixed w-full z-50 shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 font-semibold">
        {/* Left: Name + Links */}
        <div className="flex items-center space-x-6">
          <div className="text-xl font-bold text-cyan-400">David Sanchez</div>
          <a href="#home" className="hover:text-cyan-400 hidden sm:inline">Home</a>
          <a href="#about" className="hover:text-cyan-400 hidden sm:inline">About</a>
          <a href="#projects" className="hover:text-cyan-400 hidden sm:inline">Projects</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/Doger87" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/david-sanchez-lopez01/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="mailto:santiagosanchez2806@gmail.com" className="hover:text-cyan-400">
            <MdEmail className="text-2xl" />
          </a>

          {/* Hamburger Button */}
          <button
            className="md:hidden ml-2 text-3xl sm:text-4xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-800 px-4 py-4 space-y-4 overflow-hidden"
          >
            <a href="#home" onClick={handleLinkClick} className="block hover:text-cyan-400">Home</a>
            <a href="#about" onClick={handleLinkClick} className="block hover:text-cyan-400">About</a>
            <a href="#projects" onClick={handleLinkClick} className="block hover:text-cyan-400">Projects</a>

            {/* Socials in mobile menu */}
            <div className="flex space-x-4 pt-2 justify-center">
              <a href="https://github.com/Doger87" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                <FaGithub className="text-xl text-white hover:text-cyan-400" />
              </a>
              <a href="https://www.linkedin.com/in/david-sanchez-lopez01/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                <FaLinkedin className="text-xl text-white hover:text-cyan-400" />
              </a>
              <a href="mailto:santiagosanchez2806@gmail.com" onClick={handleLinkClick}>
                <MdEmail className="text-xl text-white hover:text-cyan-400" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
