import React from 'react';
import { motion } from 'framer-motion';

const posts = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `AI Deliverability Insights #${i + 1}`,
  excerpt: 'Exploring the latest techniques to improve email deliverability using AI signals and smart validation.',
  tag: ['AI', 'Deliverability', 'Data'][i % 3],
}));

export default function BlogsPage() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 right-1/4 w-[40vw] h-72 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Insights & Updates</h1>
        <p className="text-blue-200/70 mt-3">Clean, futuristic reads for email pros.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-blue-400/40 to-cyan-400/20"
            >
              <div className="rounded-2xl h-full bg-black/70 backdrop-blur-md p-6 border border-blue-500/30">
                <div className="h-36 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/30 mb-4" />
                <div className="text-xs text-blue-200/70">{p.tag}</div>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
                <p className="text-blue-200/70 text-sm mt-2">{p.excerpt}</p>
                <button className="mt-4 text-blue-300 hover:text-white">Read more →</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
