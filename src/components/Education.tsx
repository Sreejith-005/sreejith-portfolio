import { motion, useReducedMotion } from 'framer-motion'
import { education } from '../data/education'
import Reveal, { Heading } from './Reveal'
export default function Education() {
  const r = useReducedMotion()
  return (
    <div className="wrap">
      <Heading id="education" label="Education" title="Academic background" />
      <ol className="relative ml-3 border-l border-white/10 pl-8">
        <motion.span aria-hidden className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-cyan to-violet"
          initial={{ scaleY: r ? 1 : 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: r ? 0.01 : 0.6 }} />
        {education.map((e, i) => (
          <li key={e.degree} className="relative pb-10 last:pb-0">
            <motion.span aria-hidden className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-cyan bg-bg"
              initial={{ scale: r ? 1 : 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: r ? 0 : 0.2 + i * 0.2, duration: r ? 0.01 : 0.3 }} />
            <Reveal delay={i * 0.1}>
              <div className="glass p-5">
                <p className="label">{e.years}</p>
                <h3 className="font-head text-xl font-semibold">{e.degree}</h3>
                <p className="text-muted">{e.school}</p>
                <p className="mt-1 text-sm">Score: <span className="text-cyan">{e.score}</span></p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}
