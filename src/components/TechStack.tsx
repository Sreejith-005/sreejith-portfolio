import { ChevronRight } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'
export default function TechStack() {
  return (
    <div className="wrap">
      <h2 id="stack-h" className="label mb-4">Tech stack</h2>
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-3">
        {profile.techStack.map((t, i) => (
          <li key={t} className="flex items-center gap-1">
            <Reveal delay={i * 0.06}><span className="chip !px-4 !py-2 text-sm">{t}</span></Reveal>
            {i < profile.techStack.length - 1 && <ChevronRight size={14} className="text-violet" aria-hidden />}
          </li>
        ))}
      </ol>
    </div>
  )
}
