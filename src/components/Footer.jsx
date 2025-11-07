import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pb-16 pt-12 text-white/70">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
        >
          <p className="text-sm">© {new Date().getFullYear()} MotionSite. All rights reserved.</p>
          <div className="text-xs text-white/50">
            Built with love, gradients and motion.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
