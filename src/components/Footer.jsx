import React from "react";
import { Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Amogh Shukla</h3>
            <p className="text-slate-300 leading-relaxed">
              Assistant Vice President - IT with 13+ years of experience in automation, 
              DevOps, and technical leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:amoghshukla@gmail.com"
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={16} className="mr-2" />
                amoghshukla@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/amogh-shukla-82814036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Amogh Shukla. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart size={14} className="mx-1 text-red-400" /> for career growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;