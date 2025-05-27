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
    image: webDesignImg
  },
  {
    title: 'SEO Optimization',
    description: 'Climbing search rankings with data-driven strategies that put you ahead of competitors.',
    image: seoImg
  },
  {
    title: 'Social Media Marketing',
    description: 'Amplifying your brand voice across platforms to create meaningful engagement.',
    image: socialMediaImg
  },
  {
    title: 'Email Marketing',
    description: 'Nurturing relationships through personalized campaigns that drive repeat business.',
    image: emailImg
  },
  {
    title: 'PPC Advertising',
    description: 'Precision-targeted ads that deliver maximum ROI from your advertising budget.',
    image: ppcImg
  },
  {
    title: 'App Development',
    description: 'Building intuitive mobile experiences that users love and keep coming back to.',
    image: appDevImg
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

export default function CardPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#512A8C]">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your digital presence with our exclusive solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500 bg-white"
            >
              {/* Image without overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <button className="w-full py-3 px-6 rounded-lg bg-[#512A8C] text-white font-medium hover:bg-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-[0_0_15px_rgba(81,42,140,0.7)]">
                  <span>Apply Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
