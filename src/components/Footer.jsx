import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <motion.a
            href="https://github.com/Lime-oss-hash"
            target="_blank"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, color: "#34d399" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sam-bai-dev"
            target="_blank"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, color: "#34d399" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:sam2319667268@gmail.com"
            aria-label="Email"
            whileHover={{ scale: 1.2, color: "#34d399" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download="Sam_Bai_Resume.pdf"
            aria-label="Resume"
            whileHover={{ scale: 1.2, color: "#34d399" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFileAlt />
          </motion.a>
        </div>
        
        <motion.p 
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Sam Bai. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};
