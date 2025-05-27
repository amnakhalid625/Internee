// components/Footer.jsx
"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-5 px-6 md:px-20">
      {/* Newsletter */}
      <div className="md:flex justify-between items-center border-b border-gray-700 pb-8">
        <div>
          <h2 className="text-xl font-semibold">Subscribe to Newsletter</h2>
          <p className="text-gray-400">
            Subscribe to our newsletter and get exclusive insights, industry trends.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-full px-4 py-2 w-64 text-black"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-r-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="md:flex justify-between items-start py-10 space-y-10 md:space-y-0">
        {/* Logo & Info */}
        <div className="max-w-md">
          <div className="flex items-center space-x-2 mb-4">
            {/* Replace with your logo */}
            <img src="/logo.png" alt="Logo" className="w-10" />
            <span className="text-xl font-bold">Internee.pk</span>
          </div>
          <p className="text-gray-400 mb-4">
            The ultimate platform designed to turbocharge the IT sector in Pakistan.
          </p>
          <p className="flex items-center text-pink-400 gap-2">
            <Phone size={16} /> +92 312 3023645
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-green-600 p-2 rounded-full hover:opacity-80">
              <Facebook size={16} />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full hover:opacity-80">
              <Twitter size={16} />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full hover:opacity-80">
              <Linkedin size={16} />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full hover:opacity-80">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Student Ambassador</a></li>
            <li><a href="#">Interns Profiles</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Community</a></li>
            <li><a href="#">Certification</a></li>
            <li><a href="#">Scholarships</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
        <span>Copyright © 2025 internee.pk</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
