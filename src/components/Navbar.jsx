import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-6xl rounded-full border border-white/10 bg-slate-900/60 px-5 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
        <nav className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-cyan-400" />
            <span className="font-semibold">MotionSite</span>
          </div>
          <ul className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <li className="hover:text-white transition">Features</li>
            <li className="hover:text-white transition">Showcase</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white/90">
            <Star className="h-4 w-4" />
            Get Access
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
