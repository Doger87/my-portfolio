import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
import { FaReact, FaNode, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaCode, } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFramer } from 'react-icons/si';

function About() {
  const techStack = [
    { icon: <FaReact className="text-cyan-400 text-4xl" />, label: "React" },
    { icon: <FaNode className="text-green-400 text-4xl" />, label: "Node.js" },
    { icon: <SiMongodb className="text-green-500 text-4xl" />, label: "MongoDB" },
    { icon: <SiTailwindcss className="text-cyan-300 text-4xl" />, label: "TailwindCSS" },
    { icon: <FaHtml5 className="text-orange-500 text-4xl" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-400 text-4xl" />, label: "CSS3" },
    { icon: <FaJs className="text-yellow-400 text-4xl" />, label: "JavaScript" },
    { icon: <FaPython className="text-blue-300 text-4xl" />, label: "Python" },
    { icon: <SiFramer className="text-pink-400 text-4xl" />, label: "Framer Motion" },
    { icon: <FaGithub className="text-gray-300 text-4xl" />, label: "GitHub" },
    { icon: <FaCode className="text-gray-300 text-4xl" />, label: "C++" },
    { icon: <FaDatabase className="text-indigo-400 text-4xl" />, label: "SQL" },
  ];

  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-20 bg-[#0f172a] text-white" // <-- darker background
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-xl"
          />
        </motion.div>

        {/* Text Content + Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap leading-none">
              <span className="text-cyan-400">/</span> about me
            </h2>
            <div className="flex-grow h-px bg-cyan-400 mt-1"></div>
          </div>

          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            I'm David Sanchez, a senior Computer Science student at Trevecca Nazarene University. I’m passionate about building applications that solve real-world problems and create positive impact.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-gray-300">
            I’ve developed projects using the MERN stack, C++, and Python. I’m also learning more about cloud computing, cybersecurity, and modern development workflows.
          </p>
          <p className="text-lg leading-relaxed mb-8 text-gray-300">
            Outside of coding, I enjoy soccer, videogames, learning about emerging tech, and collaborating with teams that value creativity and clean code.
          </p>

          {/* Tech Stack */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-3 border border-gray-700 rounded-lg shadow-md hover:scale-110 transition-transform duration-300"
              >
                {tech.icon}
                <span className="mt-2 text-sm text-gray-400">{tech.label}</span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default About;
