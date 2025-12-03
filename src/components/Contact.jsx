import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Animation variants for fading in elements
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.2 },
};

// Container variants for staggering children animations
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Contact Section Component
export const Contact = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle form submission status (loading, success, error)
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, // Keep previous data
      [name]: value, // Update the specific field (name, email, or message)
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload

    // Set submitting state to true (disable button, show loading text)
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // On success: update status and clear form
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      // On error: update status to show error message
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

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

      {/* Form Container */}
      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <motion.input
            type="text"
            name="name"
            value={formData.name} // Controlled component: value comes from state
            onChange={handleInputChange} // Updates state when typing
            placeholder="Your Name..."
            required
            whileFocus={{ scale: 1.02 }}
          />
          
          {/* Email Input */}
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email..."
            required
            whileFocus={{ scale: 1.02 }}
          />

          {/* Message Input */}
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message..."
            required
            whileFocus={{ scale: 1.02 }}
          />

          {/* Submit Button - Disabled while sending */}
          <motion.button
            className="contact-submit"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status Message - Shows success or error feedback */}
          {formStatus.message && (
            <motion.div
              style={{
                marginTop: "1rem",
                color: formStatus.error ? "#ff4444" : "#44ff44",
                textAlign: "center",
              }}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};
