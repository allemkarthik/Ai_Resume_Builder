import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Resume Builder
            </h2>
            <p className="text-sm text-gray-400 mt-3 max-w-sm">
              Build job-winning resumes, cover letters, and cold emails using AI.
              Get hired faster with smart optimization tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resume" className="hover:text-white">Resume Builder</Link></li>
              <li><Link to="/coverletter" className="hover:text-white">Cover Letter</Link></li>
              <li><Link to="/ats" className="hover:text-white">ATS Score Checker</Link></li>
              <li><Link to="/coldmail" className="hover:text-white">Cold Emails</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/privacypolicy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/t&c" className="hover:text-white">terms & Conditions</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>    

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AI Resume Builder. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;