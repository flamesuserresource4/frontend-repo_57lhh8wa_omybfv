import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const plansBase = [
  {
    name: 'Starter',
    monthly: 19,
    yearly: 190,
    features: ['5,000 verifications', 'Basic AI scoring', 'Email finder (lite)', 'API access', 'Community support'],
    highlight: false,
  },
  {
    name: 'Pro',
    monthly: 79,
    yearly: 790,
    features: ['50,000 verifications', 'Advanced AI scoring', 'Bulk list cleansing', 'Priority API limits', 'Email finder (pro)'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    monthly: 299,
    yearly: 2990,
    features: ['500,000+ verifications', 'Custom AI models', 'SLA + SSO', 'Dedicated support', 'On-prem options'],
    highlight: false,
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(true);
  const plans = useMemo(() => plansBase, []);

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[50vw] h-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Flexible, transparent pricing</h1>
          <p className="text-blue-200/70 mt-3">Toggle billing to see savings.</p>

          <div className="mt-6 inline-flex items-center gap-3 p-1 rounded-full border border-blue-500/30 bg-white/5">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-full text-sm ${!yearly ? 'bg-blue-600 text-white' : 'text-blue-200/80'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-full text-sm ${yearly ? 'bg-blue-600 text-white' : 'text-blue-200/80'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -8 }}
              className={`relative p-[1px] rounded-2xl bg-gradient-to-b from-blue-400/50 to-cyan-400/30 ${
                p.highlight ? 'shadow-[0_0_60px_rgba(59,130,246,0.35)]' : ''
              }`}
            >
              <div className="rounded-2xl h-full bg-black/70 backdrop-blur-md p-6 border border-blue-500/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  {p.highlight && (
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-600/80">Popular</span>
                  )}
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-extrabold">
                    ${yearly ? p.yearly : p.monthly}
                    <span className="text-sm text-blue-200/60 font-normal">/{yearly ? 'yr' : 'mo'}</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-blue-100/80">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-semibold">
                  Choose {p.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
