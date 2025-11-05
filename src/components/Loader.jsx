import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-gradient-to-b from-black via-blue-950 to-black">
      <div className="relative w-40 h-40">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: '0 0 80px 20px rgba(0,123,255,0.35) inset, 0 0 40px rgba(0,123,255,0.6)' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 6 }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-blue-400/50"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
        />
        <motion.div
          className="absolute inset-10 rounded-full"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,123,255,0.8), rgba(0,0,0,0))' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
      </div>
      <div className="mt-6 text-blue-200/80 tracking-widest uppercase text-xs">Initializing AI Core…</div>
    </div>
  );
}
