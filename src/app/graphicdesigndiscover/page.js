'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Replace these with your actual image paths
import photoshopImg from '/public/images/ps.png';
import illustratorImg from '/public/images/illustration.png';
import mayaImg from '/public/images/maya.webp';

const internships = [
  {
    title: "Photoshop Internship",
    description: "Master digital image manipulation and creative design techniques",
    duration: "2 months",
    image: photoshopImg,
    tags: ["Graphic Design", "Photo Editing", "Digital Art"]
  },
  {
    title: "Illustrator Internship",
    description: "Learn vector graphics creation and professional illustration",
    duration: "3 months",
    image: illustratorImg,
    tags: ["Vector Art", "Logo Design", "Illustration"]
  },
  {
    title: "Autodesk Maya Internship",
    description: "Develop 3D modeling and animation skills for the entertainment industry",
    duration: "2 months",
    image: mayaImg,
    tags: ["3D Modeling", "Animation", "Visual Effects"]
  }
];

export default function GraphicDesignDiscover() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Graphic Design</span> Discover
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore internship opportunities to elevate your design career
          </p>
        </motion.div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={internship.image}
                  alt={internship.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{internship.title}</h3>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {internship.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {internship.duration} internship
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium transition-all"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-primary/5 rounded-2xl p-8 backdrop-blur-sm border border-primary/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to start your design journey?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our community of creative professionals and take the first step toward your dream career.
          </p>
          <motion.button
          link="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
          >
            Explore All Internships
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}