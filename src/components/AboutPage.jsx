import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const timeline = [
    { year: '2021', text: 'Founded with a mission to redefine email verification with AI.' },
    { year: '2022', text: 'Launched real-time AI scoring and bulk cleansing engine.' },
    { year: '2023', text: 'Reached 1B+ verifications with 99.9% uptime.' },
    { year: '2024', text: 'Enterprise features: SSO, SAML, and custom models.' },
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-1/4 w-[40vw] h-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Redefining email verification with AI</h1>
            <p className="text-blue-200/70 mt-3">
              We build intelligent systems that keep your outreach clean, compliant, and effective. Our
              platform blends signal analysis, pattern detection, and predictive scoring to deliver results.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: '4+', v: 'Years Active' },
                { k: '2.3B+', v: 'Verified Emails' },
                { k: '99.99%', v: 'Uptime' },
              ].map((m) => (
                <div key={m.v} className="p-4 rounded-xl bg-white/5 border border-blue-500/20 text-center">
                  <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{m.k}</div>
                  <div className="text-xs text-blue-200/70 mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Timeline</h2>
            <div className="mt-4 relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-500/30" />
              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_40px_rgba(59,130,246,0.35)]" />
                    <div className="text-sm text-blue-200/60">{t.year}</div>
                    <div className="font-medium">{t.text}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
