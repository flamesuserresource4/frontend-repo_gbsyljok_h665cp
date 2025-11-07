import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [0.9, 1.05, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 0.95, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-32 text-center md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-white/90">Now launching a new animated experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl"
        >
          Bring your ideas to life with motion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-balance text-white/70"
        >
          A clean, atmospheric landing experience with subtle animations, glowing gradients, and delightful interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-white/90">
            <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Get Started
          </button>
          <button className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
