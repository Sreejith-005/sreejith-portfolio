import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const r = useReducedMotion()
  return (
    <motion.div className={className} initial={{ opacity: 0, y: r ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: r ? 0.01 : 0.5, delay: r ? 0 : delay }}>
      {children}
    </motion.div>
  )
}
export function Heading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="label mb-2">{label}</p>
      <h2 id={`${id}-h`} className="h2">{title}</h2>
    </Reveal>
  )
}
