import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-blue-500/20 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-6 right-1/4 w-48 h-48 bg-cyan-400/10 blur-2xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">EndBounce</h3>
            <p className="text-blue-200/70 mt-2">
              AI-powered email verification and data intelligence for teams that value speed,
              accuracy, and security.
            </p>
          </div>
          <div className="flex gap-6 md:justify-center">
            <Link to="/pricing" className="text-blue-300 hover:text-white">Pricing</Link>
            <Link to="/blogs" className="text-blue-300 hover:text-white">Blogs</Link>
            <Link to="/about" className="text-blue-300 hover:text-white">About</Link>
            <Link to="/contact" className="text-blue-300 hover:text-white">Contact</Link>
          </div>
          <div className="flex items-center gap-4 md:justify-end">
            <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30">
              <Twitter className="text-blue-300" />
            </a>
            <a href="#" aria-label="Github" className="p-2 rounded-md bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30">
              <Github className="text-blue-300" />
            </a>
            <a href="#" aria-label="Email" className="p-2 rounded-md bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30">
              <Mail className="text-blue-300" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-sm text-blue-200/60">© {new Date().getFullYear()} EndBounce. All rights reserved.</div>
      </div>
    </footer>
  );
}
