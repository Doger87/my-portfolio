import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollY / scrollHeight, 1);

    const getBlendedColor = (c1, c2, t) => {
      const rgb1 = c1.match(/\d+/g).map(Number);
      const rgb2 = c2.match(/\d+/g).map(Number);
      return `rgb(${rgb1.map((v, i) => Math.round(v + (rgb2[i] - v) * t)).join(',')})`;
    };

    const darkColor = 'rgb(31, 41, 55)';       // gray-800
    const midColor = 'rgb(255, 255, 255)';     // white
    const lightColor = 'rgb(243, 244, 246)';   // gray-100

    let bgColor;

    if (scrollPercent < 0.33) {
      bgColor = getBlendedColor(darkColor, midColor, scrollPercent / 0.33);
    } else if (scrollPercent < 0.66) {
      bgColor = getBlendedColor(midColor, lightColor, (scrollPercent - 0.33) / 0.33);
    } else {
      bgColor = lightColor;
    }

    controls.start({
      background: bgColor,
      transition: { duration: 0.5, ease: 'easeInOut' },
    });
  }, [scrollY, controls]);

  return (
    <div className="relative font-sans">
      {/* 🔹 This is your dynamic background layer */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-10"
        animate={controls}
      />

      {/* Your page sections */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />

      {/*  Optional: Scroll to Top Button */}
    </div>
  );
}

export default App;
