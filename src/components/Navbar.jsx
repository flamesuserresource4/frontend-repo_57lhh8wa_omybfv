import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-white ${
      isActive ? 'text-white' : 'text-blue-300/80'
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/40 border-b border-blue-500/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60vw] h-48 bg-blue-500/20 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-blue-500/60 rounded-full" />
            <Rocket className="relative text-blue-400" />
          </div>
          <span className="font-semibold tracking-wide">EndBounce</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkCls} end>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-blue-500/30 bg-black/30 hover:bg-blue-500/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="text-blue-300" /> : <Menu className="text-blue-300" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-500/20 bg-black/80">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkCls}
                end
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
