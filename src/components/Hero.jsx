import { motion } from "framer-motion";

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
            {" "}
            Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Full-stack engineer building modern, production-ready web apps with React, Next.js, TypeScript, Supabase, Clerk, and Tailwind—shipping real projects like a Trello-style Kanban with auth, RLS, and realtime sync.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

