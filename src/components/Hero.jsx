import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDesktop } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="hero-badge"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span>
              <span className="wave-icon">👋</span> Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Sam Bai
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Full-stack engineer building modern, production-ready web apps with
            React, Next.js, TypeScript, Supabase, Clerk, and Tailwind—shipping
            real projects like a Trello-style Kanban with auth, RLS, and
            realtime sync.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              href="https://github.com/Lime-oss-hash"
              target="_blank"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sam-bai-dev"
              target="_blank"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SyntaxHighlighter
            style={vscDarkPlus}
            language="typescript"
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              borderRadius: "1rem",
              background: "rgba(30, 41, 59, 0.8)",
              backdropFilter: "blur(10px)",
              fontSize: "0.9rem",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              marginBottom: 50,
            }}
            className="code-snippet"
          >
            {`const aboutMe: DeveloperProfile = {
  codename: "SamDev",
  origin: "🇳🇿 Hamilton-based, living in dark-mode tabs",
  role: "Full‑stack Web Engineer",
  stack: {
    languages: ["TypeScript", "JavaScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase", "Clerk"],
  },
  traits: [
    "shipping-real-world-SaaS",
    "AI-assisted problem solver",
    "clean-UI + clean-DB enjoyer",
    "late-night-debugging specialist",
  ],
  missionStatement:
    "Building production-ready web apps, one deploy and refactor at a time",
  availability: "Open to full‑time, freelance, and open‑source collabs",
};`}
          </SyntaxHighlighter>
        </motion.div>

        <motion.div
          className="floating-card"
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="card-content">
            <span className="card-icon"> <FaDesktop /> </span>
            <span className="card-text">
              {" "}
              Currently working on something awesome!
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
