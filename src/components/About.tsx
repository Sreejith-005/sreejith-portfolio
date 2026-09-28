import { profile } from '../data/profile'
import Reveal, { Heading } from './Reveal'
export default function About() {
  return (
    <div className="wrap">
      <Heading id="about" label="About" title="Fresher. Builder. AI/ML learner." />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-muted">{profile.about.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.info.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <div className="glass h-full p-4"><p className="label mb-1">{c.label}</p><p className="text-sm">{c.value}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
