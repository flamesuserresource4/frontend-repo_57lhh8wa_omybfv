import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Shield, Zap, Target, CheckCircle2, Lock, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative h-[86vh] min-h-[560px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Empower Your Email Lists with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AI Precision</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-blue-100/80 text-lg"
          >
            Verify, find, and clean your emails with the power of AI.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-[0_0_50px_rgba(0,123,255,0.4)]"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-3 rounded-lg border border-blue-500/40 text-blue-200 hover:bg-blue-500/10"
            >
              Check Pricing
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: <CheckCircle2 className="text-blue-300" />, title: 'Email Verification', text: 'Instant, AI-backed validation to reduce bounce rates and protect reputation.' },
    { icon: <Target className="text-blue-300" />, title: 'Email Finder', text: 'Discover verified contacts with intelligent enrichment and scoring.' },
    { icon: <Shield className="text-blue-300" />, title: 'List Cleansing', text: 'Clean, dedupe, and enrich lists at scale with enterprise-grade accuracy.' },
  ];
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Core Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl bg-white/5 border border-blue-500/20 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(59,130,246,0.15)]"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 grid place-items-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-blue-200/70 mt-2 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const features = [
    { icon: <Zap className="text-blue-300" />, title: 'Speed', text: 'Real-time checks with low latency pipelines.' },
    { icon: <Cpu className="text-blue-300" />, title: 'Accuracy', text: 'Multi-signal AI scoring to predict deliverability.' },
    { icon: <Lock className="text-blue-300" />, title: 'Security', text: 'Enterprise-grade encryption and privacy guarantees.' },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950/30 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Why EndBounce</h2>
            <p className="text-blue-200/70 mt-3">
              Built for teams that demand precision. Our AI cuts through noise to keep your lists healthy
              and your campaigns performing.
            </p>
            <div className="mt-6 grid gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-blue-500/20">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 grid place-items-center">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-blue-200/70 text-sm">{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative h-72 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)]" />
              <div className="absolute inset-0 border border-blue-500/30 rounded-2xl" />
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { k: '2.3B+', v: 'Emails Verified' },
    { k: '99.2%', v: 'Accuracy Rate' },
    { k: '99.99%', v: 'Uptime' },
    { k: '120ms', v: 'Avg. Response' },
  ];
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.v} className="p-6 rounded-xl bg-white/5 border border-blue-500/20 text-center">
            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {s.k}
            </div>
            <div className="mt-1 text-blue-200/70 text-sm">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: 'Ava, Growth Lead', text: 'Bounce rates dropped by 42% in a week. Unreal performance.', color: 'from-blue-400 to-cyan-300' },
    { name: 'Noah, CTO', text: 'API is blazing fast and the scoring is scarily accurate.', color: 'from-cyan-300 to-sky-400' },
    { name: 'Liam, Ops', text: 'The list cleansing saved us days of manual labor.', color: 'from-sky-400 to-blue-400' },
  ];
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">Loved by modern teams</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-blue-500/20"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${t.color} mb-3 shadow-[0_0_40px_rgba(59,130,246,0.35)]`} />
              <p className="text-blue-100/80">{t.text}</p>
              <div className="mt-3 text-sm text-blue-200/60">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Why />
      <Stats />
      <Testimonials />
    </div>
  );
}
