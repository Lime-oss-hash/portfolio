import { motion } from "framer-motion";

// Variants for nav list container with stagger effect
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for individual nav items
const navItemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const Navbar = () => {
  return (
    // Navigation Bar with slide-down animation
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo with hover effect */}
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.div>

      {/* Navigation Links with staggered entrance */}
      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li
          variants={navItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home" className="#hero">Home</a>
        </motion.li>
        <motion.li
          variants={navItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          variants={navItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
