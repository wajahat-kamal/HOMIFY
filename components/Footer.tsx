import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B111E] text-gray-300 py-10 px-6 md:px-20 lg:px-32 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 cursor-pointer select-none mb-3">
            <Image
              src="/logo.png"
              alt="Homify"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <h1 className="text-2xl font-bold text-white tracking-tight">
              HOMIFY
            </h1>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building homes that inspire and empower lives. Your dream home
            awaits — discover it with Homify.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#Header"
                className="hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-primary transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Karachi, Pakistan</li>
            <li>📞 +92 333 1234567</li>
            <li>✉️ contact@homify.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-medium">Homify</span> — All Rights
          Reserved.
        </p>
        <p className="mt-2">
          Made with <span className="text-red-500">❤</span> by{" "}
          <a
            href="https://wajahat-kamal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Wajahat Kamal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
