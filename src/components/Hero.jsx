import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-white px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          hi, <span className="text-cyan-400">David</span> here.
        </h1>

        <p className="text-xl md:text-2xl mb-6">
          <Typewriter
            words={['Full-Stack Developer', 'CS Student', 'Tech Explorer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* View Projects Button */}
           <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold transition"
      >
          View My Work
         </motion.a>

  {/* Download Resume Button */}
  <motion.a
    href="/DavidS-Resume.pdf"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-lg font-semibold transition"
  >
    Download Resume
  </motion.a>
</div>
      </motion.div>
    </section>
  );
}

export default Hero;
