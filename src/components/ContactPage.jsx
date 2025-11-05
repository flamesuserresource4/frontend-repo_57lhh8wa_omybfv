import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Globe2 } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  }

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-1/3 w-[40vw] h-72 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-200/70 mt-3">
            We’re here to help. Reach out for support, partnerships, or general questions.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-blue-200/80"><Mail className="text-blue-300"/> support@endbounce.com</div>
            <div className="flex items-center gap-3 text-blue-200/80"><MessageSquare className="text-blue-300"/> @endbounce</div>
          </div>

          <div className="mt-10 relative h-64 rounded-2xl overflow-hidden border border-blue-500/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_60%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <Globe2 className="w-16 h-16 text-blue-300 animate-pulse" />
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-white/5 border border-blue-500/30 backdrop-blur-md"
        >
          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-blue-200/80">Name</label>
              <input required className="mt-1 w-full rounded-lg bg-black/40 border border-blue-500/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-blue-500/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80">Message</label>
              <textarea rows={5} required className="mt-1 w-full rounded-lg bg-black/40 border border-blue-500/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center gap-2 justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 font-semibold">
              <Send size={18} /> Send Message
            </button>
            {sent && <div className="text-green-400">Sent! We will get back to you shortly.</div>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
