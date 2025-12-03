import { motion } from 'framer-motion';

// Animation variants for fading in elements
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2 },
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

// Contact Section Component
export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true}}
    >
      Get in Touch
      </motion.h2>

      <motion.div className="contact-content" variants={fadeInUp}
      >
        <motion.form className="contact-form">
            <motion.input
                type="text"
                name="name"
                placeholder="Your Name..."
                required
                whileFocus={{ scale: 1.02 }}
            />
            <motion.input
                type="email"
                name="email"
                placeholder="Your Email..."
                required
                whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
                name="message"
                placeholder="Your Message..."
                required
                whileFocus={{ scale: 1.02 }}
            />

            <motion.button
                className="contact-submit"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {" "}
                Send Message
            </motion.button>


        </motion.form>
        
      </motion.div>
    </motion.section>
  );
};
