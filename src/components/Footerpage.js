"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background text-text rounded-t-[100px] px-6 md:px-24 pt-16 pb-6 overflow-hidden">
      {/* Newsletter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="md:flex justify-between items-center border-b border-gray-700 pb-10"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 max-w-md">
            Get exclusive insights, industry trends & updates delivered to your inbox.
          </p>
        </div>
        <form className="mt-6 md:mt-0 flex max-w-md w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-3 rounded-l-full text-black focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-r-full font-medium transition-all shadow-lg"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 pb-10">
        {/* Logo and Description */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">EliteTech</span>
          </div>
          <p className="text-gray-400 mb-6">
            The ultimate platform designed to turbocharge the IT sector in Pakistan through virtual internships and practical exposure.
          </p>
          <div className="space-y-2">
            <p className="text-primary flex items-center gap-3">
              <Phone size={18} className="shrink-0" /> 
              <span>+92 312 3023645</span>
            </p>
            <p className="text-gray-400 flex items-center gap-3">
              <Mail size={18} className="shrink-0" /> 
              <span>contact@elitetech.pk</span>
            </p>
          </div>
          <div className="flex gap-3 mt-6">
            {[
              { icon: <Facebook size={18} />, color: "hover:bg-blue-600" },
              { icon: <Twitter size={18} />, color: "hover:bg-sky-500" },
              { icon: <Linkedin size={18} />, color: "hover:bg-blue-700" },
              { icon: <Instagram size={18} />, color: "hover:bg-pink-600" },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3 }}
                href="#"
                className={`bg-gray-700 p-3 rounded-full hover:text-white transition-all ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-gray-400">
            {['Home', 'Student Ambassador', 'Interns Profiles', 'About Us'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href="#" className="hover:text-primary transition-colors">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Resources</h3>
          <ul className="space-y-4 text-gray-400">
            {['Community', 'Certification', 'Scholarships', 'Support'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a href="#" className="hover:text-primary transition-colors">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 pt-6 mt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center"
      >
        <span>© {new Date().getFullYear()} EliteTech — All rights reserved</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          {['Terms', 'Privacy', 'Cookies'].map((item, index) => (
            <motion.a 
              key={index}
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}