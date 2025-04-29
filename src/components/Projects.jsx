import { motion } from 'framer-motion';
import { FaReact, FaNode, FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaPython,} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFramer } from 'react-icons/si';

const techIcons = {
  React: <FaReact className="text-cyan-500" />,
  "Node.js": <FaNode className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-400" />,
  "Framer Motion": <SiFramer className="text-pink-500" />,
  HTML5: <FaHtml5 className="text-orange-600" />,
  CSS3: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  Python: <FaPython className="text-blue-400" />,  //       
}

const projects = [
  {
    title: "Task Manager App",
    description: "A full-stack task manager built with the MERN stack, including task filtering, editing, and a responsive UI.",
    github: "https://github.com/Doger87/Full-Stack-Task-Goal-Management-App",
    live: "https://task-manager-frontend-sable-beta.vercel.app/",
    images: [
      "/assets/task-manager-preview.png",
      "/assets/task-manager-preview-light.png",
    ],
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    description: "This is my personal portfolio website built with React and TailwindCSS.",
    github: "https://github.com/Doger87/my-portfolio",
    live: "https://davidsanchez.vercel.app/",
    images: [
      "/assets/portfolio-preview.png",
    ],
    tech: ["JavaScript", "React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather dashboard using OpenWeather API. Shows temperature, humidity, and weather conditions for any city.",
    github: "https://github.com/Doger87/simple-weather-dashboard",
    live: "https://your-weather-dashboard-link.vercel.app/",
    images: [
      "/assets/weather-preview.png",
    ],
    tech: ["Python"],
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-gray-900">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black whitespace-nowrap leading-none">
            <span className="text-cyan-500">/</span> projects
          </h2>
          <div className="flex-grow h-px bg-cyan-500 mt-1"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
 <motion.div
 key={index}
 className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: index * 0.2 }}
 viewport={{ once: true }}
>
 {/* 📝 Left Side — Project Info */}
 <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
   <div>
     <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
     <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
   </div>
  {/* Tech Stack Icons */}
  <div className="flex flex-wrap gap-6 mt-4 text-3xl">
  {project.tech.map((techItem, idx) => (
    <div key={idx} className="flex flex-col items-center" title={techItem}>
      {techIcons[techItem]}
      <span className="text-xs mt-1 text-gray-600">{techItem}</span> {/* ✨ label text */}
    </div>
  ))}
</div>

   {/* 🔗 GitHub and Live Icons */}
   <div className="flex space-x-4 mt-4">
     <a
       href={project.github}
       target="_blank"
       rel="noopener noreferrer"
       className="text-gray-600 hover:text-cyan-500 text-2xl"
       title="View GitHub"
     >
       <FaGithub />
     </a>
     <a
       href={project.live}
       target="_blank"
       rel="noopener noreferrer"
       className="text-gray-600 hover:text-cyan-500 text-2xl"
       title="View Live"
     >
       <FaExternalLinkAlt />
     </a>
   </div>
 </div>

 {/* 📸 Right Side — Image */}
 <div className="w-full md:w-1/2 flex justify-center items-center gap-2 p-4">
  {project.images.length > 1 ? (
    // If there are two images → show both side-by-side
    project.images.map((imgSrc, idx) => (
      <img
        key={idx}
        src={imgSrc}
        alt={`${project.title} screenshot ${idx + 1}`}
        className="rounded-lg object-contain h-64 w-2/5"
      />
    ))
  ) : (
    // If only one image → center it and make it bigger
    <img
      src={project.images[0]}
      alt={`${project.title} screenshot`}
      className="rounded-lg object-contain h-64 w-4/5"
    />
  )}
</div>

</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
