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
            className="greeting"
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

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};
