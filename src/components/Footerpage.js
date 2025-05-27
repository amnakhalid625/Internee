// components/Footer.jsx
"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-t-[100px] px-6 md:px-24 pt-20 pb-6">
      {/* Newsletter */}
      <div className="md:flex justify-between items-center border-b border-gray-700 pb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">
            Subscribe to Newsletter
          </h2>
          <p className="text-gray-400 max-w-md">
            Subscribe to get exclusive insights, industry trends & updates.
          </p>
        </div>
        <form className="mt-6 md:mt-0 flex max-w-md w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-l-full text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-r-full"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 pb-10">
        {/*  Logo,Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src="/logo.png" alt="Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-white">Internee.pk</span>
          </div>
          <p className="text-gray-400 mb-4">
            The ultimate platform designed to turbocharge the IT sector in Pakistan through virtual internships and practical exposure.
          </p>
          <p className="text-pink-400 flex items-center gap-2">
            <Phone size={16} /> +92 312 3023645
          </p>
          <p className="text-gray-400 flex items-center gap-2 mt-1">
            <Mail size={16} /> contact@internee.pk
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-green-600 p-2 rounded-full hover:scale-110 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full hover:scale-110 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full hover:scale-110 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full hover:scale-110 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/*  Company Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Student Ambassador</a></li>
            <li><a href="#">Interns Profiles</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Right:  */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Community</a></li>
            <li><a href="#">Certification</a></li>
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-4 mt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <span>© 2025 Internee.pk — All rights reserved</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
