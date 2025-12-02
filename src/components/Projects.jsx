import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Container variants for staggering children animations
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Projects Section Component
export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="section-title"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url(/projects/project1.png)" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
          </motion.div>
          <div className="project-info">
            <h3> SaaS Platform </h3>
            <p>
              A modern full-stack project management application built with Next.js 16, React 19, TypeScript, Supabase, and Clerk. Features drag-and-drop task management, real-time updates, and beautiful responsive UI.
            </p>
            <div className="project-tech">
              <span> React </span>
              <span> Next.js </span>
              <span> Typescript </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url(/projects/internship-waka.png)" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
          </motion.div>
          <div className="project-info">
            <h3> Junior Full-Stack Developer Intern </h3>
            <p>
              Contributed to a community-focused transportation web platform using the MERN stack, building responsive React interfaces and integrating them with RESTful APIs and a MongoDB backend.
            </p>
            <p>
              Collaborated with a small team to implement new features, fix bugs, and improve UX, following Git-based workflows and code reviews.
            </p>
            <div className="project-tech">
              <span> React </span>
              <span> Node.js </span>
              <span> MongoDB </span>
              <span> Express </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};