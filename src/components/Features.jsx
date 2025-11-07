import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Micro-animations',
    desc: 'Smooth motion that guides attention without overwhelming.',
  },
  {
    icon: Layers,
    title: 'Beautiful layers',
    desc: 'Soft gradients, glass morphism and glowing accents built-in.',
  },
  {
    icon: Zap,
    title: 'Performance-first',
    desc: 'Carefully tuned to stay fast on any device.',
  },
];

export default function Features() {
  return (
    <section className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Designed to feel alive
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20"
            >
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
                <f.icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
