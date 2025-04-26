import { motion } from 'framer-motion';

const projects = [
  {
    title: "Task Manager App",
    description: "A full-stack task app built with the MERN stack. Includes task filtering, editing, and dark mode support.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio, built with React, TailwindCSS, and Framer Motion. You're looking at it!",
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A clean weather app using the OpenWeather API. Displays location-based forecasts with animated transitions.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-gray-900">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Title with line */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black whitespace-nowrap leading-none">
            <span className="text-cyan-500">/</span> projects
          </h2>
          <div className="flex-grow h-px bg-cyan-500 mt-1"></div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-700">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
