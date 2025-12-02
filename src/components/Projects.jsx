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
          ></motion.div>
          <div className="project-info">
            <h3> TaskFlow Board </h3>
            <p>
              Full-stack Kanban-style task management app built with Next.js 16, React 19, TypeScript, Supabase, Clerk, shadcn/ui, Tailwind, and dnd-kit.
              Features authenticated dashboards, real-time board data, drag-and-drop columns/tasks, and analytics-style board overviews.
            </p>
            <div className="project-tech">
              <span> Next.js 16 </span>
              <span> React 19 </span>
              <span> TypeScript </span>
              <span> Supabase </span>
              <span> Clerk </span>
              <span> dnd-kit </span>
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
            <h3> Community Transport MERN Platform </h3>
            <p>
              Sole developer for a real-world community transport booking platform built as a Wintec final-year industry placement for a NZ non-profit.
            </p>
            <p>
              Implemented a full MERN-stack app with user auth, real-time booking calendar, driver scheduling, and automated email notifications, deployed across Netlify and Railway.
            </p>
            <div className="project-tech">
              <span> React </span>
              <span> Node.js </span>
              <span> Express </span>
              <span> MongoDB Atlas </span>
              <span> Nodemailer </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};