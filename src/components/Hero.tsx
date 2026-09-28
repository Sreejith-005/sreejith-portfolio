import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'
import NetworkBg from './NetworkBg'

const chips = [['Python', '8%', '12%'], ['ML', '70%', '8%'], ['DL', '85%', '42%'], ['LLM', '10%', '55%'], ['RAG', '60%', '75%'], ['LangChain', '18%', '85%']]

function useResumeExists() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    fetch(profile.resumeUrl, { method: 'HEAD' }).then((r) => setOk(r.ok && (r.headers.get('content-type') || '').includes('pdf'))).catch(() => setOk(false))
  }, [])
  return ok
}

export default function Hero() {
  const r = useReducedMotion()
  const resume = useResumeExists()
  const t = { duration: r ? 0.01 : 0.55 }
  return (
    <div className="relative overflow-hidden pb-16 pt-28 md:pt-36">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0, y: r ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={t} className="mb-3 text-lg text-muted">{profile.hero.greeting}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: r ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...t, delay: r ? 0 : 0.1 }} className="h1">
            {profile.hero.headline} <span className="grad-text">{profile.hero.highlight}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ...t, delay: r ? 0 : 0.25 }} className="mt-5 max-w-xl text-muted">{profile.hero.sub}</motion.p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View My Projects</a>
            <a href="#contact" className="btn-ghost">Let's Connect</a>
            {resume ? <a href={profile.resumeUrl} download className="btn-ghost">Download Resume</a> : (
              <span className="group relative">
                <button type="button" aria-disabled="true" aria-describedby="resume-tip" className="btn-ghost cursor-not-allowed opacity-70">Download Resume</button>
                <span id="resume-tip" role="tooltip" className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-bg px-2 py-1 text-xs opacity-0 transition group-focus-within:opacity-100 group-hover:opacity-100">Resume coming soon</span>
              </span>
            )}
          </div>
          <p className="glass mt-8 inline-flex max-w-xl items-start gap-3 px-4 py-3 text-sm">
            <span aria-hidden="true">🟢</span><span><strong>Open to Opportunities:</strong> <span className="text-muted">{profile.status}</span></span>
          </p>
        </div>
        <div className="relative hidden h-[420px] lg:block" aria-hidden="true">
          <NetworkBg />
          {chips.map(([n, left, top], i) => (
            <span key={n} className="chip float absolute" style={{ left, top, animationDelay: `${i * 0.7}s` }}>{n}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
