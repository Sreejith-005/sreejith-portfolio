import { Award } from 'lucide-react'
import { certifications } from '../data/certifications'
import Reveal, { Heading } from './Reveal'
export default function Certifications() {
  return (
    <div className="wrap">
      <Heading id="certifications" label="Certifications" title="Learning, certified" />
      {certifications.map((c) => (
        <Reveal key={c.title}>
          <div className="glass relative max-w-2xl border-2 !border-cyan/30 p-6 sm:p-8">
            <div className="absolute inset-2 rounded-xl border border-dashed border-white/10" aria-hidden />
            <div className="relative flex gap-4">
              <Award className="mt-1 shrink-0 text-cyan" size={32} aria-hidden />
              <div>
                <p className="label">Certificate of Completion</p>
                <h3 className="font-head text-2xl font-semibold">{c.title}</h3>
                <p className="text-violet">{c.issuer} · {c.dates}</p>
                <p className="mt-3 text-muted">{c.text}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
