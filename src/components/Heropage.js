'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  const categories = [
    { name: 'Tech', icon: '💻', count: '1,200+' },
    { name: 'Marketing', icon: '📈', count: '850+' },
    { name: 'Design', icon: '🎨', count: '720+' },
    { name: 'Finance', icon: '💰', count: '950+' },
    { name: 'Engineering', icon: '⚙️', count: '1,100+' },
    { name: 'Healthcare', icon: '🏥', count: '680+' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-purple-50 overflow-hidden py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Kickstart Your <span className="bg-primary text-transparent bg-clip-text">Dream Career</span> <br /> with Top Internships
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Join thousands of students and land internships with leading companies. Get matched based on your skills and goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="bg-primary text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:brightness-110 transition"
                >
                  � Explore Internships
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="border border-purple-600 text-purple-700 px-6 py-3 rounded-xl font-medium hover:bg-purple-100 transition"
                >
                  Learn How It Works
                </Link>
              </motion.div>
            </div>

            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[32, 35, 38].map((id) => (
                  <img
                    key={id}
                    src={`https://randomuser.me/api/portraits/women/${id}.jpg`}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                    alt="user"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Trusted by 5,000+ Students <span className="text-yellow-500">★ 4.9</span>
                </p>
                <p className="text-xs text-gray-500">Real reviews. Real success.</p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Right Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-8 space-y-6 transition-transform hover:scale-[1.02] hover:shadow-3xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Find Your Perfect Internship</h3>
                <p className="text-gray-600 text-sm">Browse opportunities in top industries</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {categories.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -5 }}
                    className="bg-white hover:bg-purple-50 border border-gray-100 hover:border-purple-200 text-gray-800 text-sm font-medium rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <div className="mt-2 text-xs text-purple-600">{item.count} openings</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:brightness-110 transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Get Matched Instantly</span>
                  <span className="text-xl">✨</span>
                </motion.button>
              </div>
              
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No resume required for matching</span>
              </div>
            </div>

            {/* Success Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-full shadow-xl text-sm font-medium flex items-center space-x-2 border border-purple-200"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-purple-200 rounded-full blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full p-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="text-gray-700 font-semibold">5,000+ Success Stories</span>
            </motion.div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-purple-200/50 blur-xl"></div>
            <div className="absolute bottom-10 -right-8 w-20 h-20 rounded-full bg-indigo-200/40 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;