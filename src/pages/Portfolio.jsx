import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(move);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(move);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800 font-sans relative overflow-x-hidden px-4 sm:px-6 md:px-8">
      {/* Mouse Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-black opacity-60 mix-blend-difference pointer-events-none z-50"
      ></div>

      {/* Navbar */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-white text-gray-900 border-b px-6 py-4 shadow flex justify-between items-center sticky top-0 z-40"
      >
        <h1 className="text-xl font-bold">Vedant's Portfolio</h1>
        <ul className="hidden md:flex space-x-6 text-md">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <header className="text-center py-16 px-6">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="flex flex-col items-center justify-center">
          <img
            src="/profile.jpg"
            alt="Vedant Kale"
            className="w-40 h-40 rounded-full mb-6 shadow-lg object-cover"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Vedant Kale</h1>
          <p className="text-xl text-gray-700">E&TC Engineer | Web Developer | React Enthusiast</p>
          <div className="mt-4">
            <a href="/public/vedant kale Resume.pdf" download>
              <Button className="mt-4 bg-blue-700 hover:bg-blue-600 text-white">📄 Download Resume</Button>
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a href="https://github.com/KaleVedant" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vedant-kale-851164291/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </header>

      {/* Main Sections */}
      <main className="w-full min-h-screen bg-white text-gray-800 font-sans relative overflow-x-hidden">
        {/* About */}
        <motion.section id="about" variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center px-6 py-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 inline-block border-blue-600 pb-2">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello! I’m Vedant Kale, a passionate Electronics and Telecommunication Engineering student with hands-on experience in Java, web development, React, and modern front-end tools. I love crafting efficient, responsive, and user-friendly web interfaces.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I’ve led development teams, built scalable projects, and contributed to open-source code on GitHub. Always eager to learn and grow in the dynamic tech landscape.
          </p>
        </motion.section>

        {/* Skills */}
<motion.section 
  id="skills" 
  className="py-12 px-6 max-w-4xl mx-auto"
  variants={fadeInUp} 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, margin: "-100px" }}
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center border-b-4 inline-block border-blue-600 pb-2">
    Skills & Tools
  </h2>
  
  
  <div className="grid md:grid-cols-3 gap-8">
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Frontend</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          JavaScript (ES6+)
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          React
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          HTML5 & CSS3
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Tailwind CSS
        </li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Backend</h3>
      <ul className="space-y-2">
      <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          java
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Node.js
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Express
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          MongoDB
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          MySQL
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">languages</h3>
      <ul className="space-y-2">
      <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Core java
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          basic C
        </li>
       
      </ul>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Tools</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Git & GitHub
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          VS Code
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Figma
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Postman
        </li>
      </ul>
    </div>
  </div>
</motion.section>

        {/* Projects */}
        <motion.section id="projects" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-700">Car Booking Platform</h3>
              <p>Led a team to develop a cab booking app using HTML, CSS, JavaScript. Implemented location selection and fare calculation.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-700">Aniwatch Website</h3>
              <p>Created a responsive anime browsing website with filtering features to enhance user navigation.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-700">Personal Portfolio</h3>
              <p>Developed an react tailwind based Portfolioand deploy using Vite</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section id="experience" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b pb-2">Experience</h2>
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Web Developer Intern – Oasis Infobyte</h3>
            <p className="text-sm text-gray-600">Feb 2024 – Mar 2024 | Pune</p>
            <ul className="list-disc list-inside mt-2">
              <li>Built responsive web pages using HTML, CSS, and JavaScript (95% cross-device compatibility).</li>
              <li>Improved performance by 20% through debugging and optimization.</li>
              <li>Integrated React components for scalable, maintainable UI design.</li>
              <li>Used Git for version control and project collaboration.</li>
            </ul>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section id="contact" className="text-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let’s Connect</h2>
          <p className="text-lg">
            📧 <a href="mailto:vedant35kale@gmail.com" className="text-blue-600 hover:underline">vedant35kale@gmail.com</a>
          </p>
      
        </motion.section>
      </main>

      <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-12" role="contentinfo">
        <p>Created with ❤️ by Vedant</p>
      </footer>
    </div>
  );
}
