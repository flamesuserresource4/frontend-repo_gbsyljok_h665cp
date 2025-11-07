import { motion } from 'framer-motion';

function Card({ title, subtitle, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 text-white"
    >
      <div className={`pointer-events-none absolute -inset-1 ${gradient} opacity-20 blur-2xl`} />
      <div className="relative z-10">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 h-40 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.35),transparent_45%)]"
        />
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-white md:text-4xl"
        >
          Showcase
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card title="Gradient Fields" subtitle="Soft depth and motion highlights." gradient="bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
          <Card title="Glass Surfaces" subtitle="Frosted cards with glow." gradient="bg-gradient-to-tr from-cyan-400 to-indigo-500" />
          <Card title="Alive Layouts" subtitle="Subtle micro-interactions." gradient="bg-gradient-to-tr from-violet-500 to-emerald-400" />
        </div>
      </div>
    </section>
  );
}
