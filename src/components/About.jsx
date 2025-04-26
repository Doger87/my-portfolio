import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg'; // optional: add your own photo

function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen text-gray-900 px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Profile Image (Optional) */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-60 h-60 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black whitespace-nowrap leading-none">
          <span className="text-cyan-500">/</span> about me
          </h2>
          <div className="flex-grow h-px bg-cyan-500 mt-1"></div> {/* fine-tuned alignment */}
          </div>
          <p className="text-lg leading-relaxed mb-4">
            I'm David Sanchez, a senior Computer Science student at Trevecca Nazarene University. I’m passionate about building applications that solve real-world problems and create positive impact.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I’ve developed projects using the MERN stack, C++, and python. I’m also learning more about cloud computing, cybersecurity, and modern development workflows.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of coding, I enjoy soccer, videogames, learning about emerging tech, and collaborating with teams that value creativity and clean code.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
