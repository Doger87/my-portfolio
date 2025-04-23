import { motion } from 'framer-motion';

const projects = [
  {
    title: "Task Manager App",
    description: "A full-stack task management app built with the MERN stack. Includes CRUD operations, filtering, and dark mode.",
    link: "#", // Replace with real link later (GitHub or live demo)
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio site! Built with React, Tailwind, and Framer Motion to showcase my projects.",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A simple weather dashboard using OpenWeatherMap API. Built with vanilla JS and Tailwind.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 px-6 py-20 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
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
              <p className="mb-4">{project.description}</p>
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