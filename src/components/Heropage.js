'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-purple-100 overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Kickstart Your <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">Dream Career</span> <br /> with Top Internships
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Join thousands of students and land internships with leading companies. Get matched based on your skills and goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:brightness-110 transition"
                >
                  🚀 Explore Internships
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

          {/* Right Image/Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="w-full max-w-md mx-auto bg-white/40 backdrop-blur-lg border border-white/30 shadow-2xl rounded-3xl p-6 space-y-6 transition-transform hover:scale-[1.02]">
              <h3 className="text-lg font-semibold text-gray-900 text-center">Find Internships In</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Tech', 'Marketing', 'Design', 'Finance'].map((item) => (
                  <div
                    key={item}
                    className="bg-white/80 hover:bg-white/90 text-purple-700 text-sm font-medium rounded-xl p-4 text-center shadow-md backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:brightness-110 transition">
                Match Me Now 🚀
              </button>
            </div>

            <div className="absolute -bottom-5 -right-5 bg-white px-5 py-2 rounded-full shadow-lg text-sm font-medium flex items-center space-x-2 border border-purple-200">
              <span className="bg-green-100 text-green-600 rounded-full p-1 shadow">
                ✔
              </span>
              <span className="text-gray-700">5000+ Placed Successfully</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
