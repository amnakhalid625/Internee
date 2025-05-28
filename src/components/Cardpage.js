'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const webDesignImg = '/images/webdesign.png';
const seoImg = '/images/seo.png';
const socialMediaImg = '/images/marketing.png';
const emailImg = '/images/email.jpg';
const ppcImg = '/images/ads.jpg';
const appDevImg = '/images/app.png';

const services = [
  {
    title: 'Web Design',
    description: 'Crafting digital experiences that captivate and convert with pixel-perfect responsive designs.',
    image: webDesignImg,
    icon: '💎'
  },
  {
    title: 'SEO Optimization',
    description: 'Climbing search rankings with data-driven strategies that put you ahead of competitors.',
    image: seoImg,
    icon: '📈'
  },
  {
    title: 'Social Media Marketing',
    description: 'Amplifying your brand voice across platforms to create meaningful engagement.',
    image: socialMediaImg,
    icon: '📱'
  },
  {
    title: 'Graphic Design',
    description: 'Visual storytelling that transforms ideas into stunning graphics and brand identities.',
    image: emailImg,
    icon: '✉️'
  },
  {
    title: 'PPC Advertising',
    description: 'Precision-targeted ads that deliver maximum ROI from your advertising budget.',
    image: ppcImg,
    icon: '🎯'
  },
  {
    title: 'App Development',
    description: 'Building intuitive mobile experiences that users love and keep coming back to.',
    image: appDevImg,
    icon: '📲'
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.8 }
  }
};

const hoverVariants = {
  hover: { 
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(81, 42, 140, 0.25), 0 10px 10px -5px rgba(81, 42, 140, 0.1)'
  }
};

export default function CardPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Digital</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your online presence with our expert solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white border border-gray-100 hover:border-primary/20"
            >
              {/* Primary Color Overlay on Hover */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Floating Icon */}
              <motion.div 
                className="absolute -top-5 -right-5 text-6xl opacity-20 group-hover:opacity-30 text-primary transition-all duration-700 group-hover:scale-110"
                initial={{ rotate: -15 }}
                whileHover={{ rotate: 0 }}
              >
                {service.icon}
              </motion.div>

              {/* Image with Glow Effect */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-0 bg-white group-hover:bg-white/95 transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-[0_0_15px_rgba(81,42,140,0.3)]"
                >
                  <span>Discover More</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>

             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}