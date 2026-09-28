import { skills } from '../data/skills'
import Reveal, { Heading } from './Reveal'
export default function Skills() {
  return (
    <div className="wrap">
      <Heading id="skills" label="Skills" title="Tools I work with" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.category} delay={i * 0.06}>
            <div className="glass h-full p-5">
              <h3 className="mb-3 font-head text-lg font-semibold">{s.category}</h3>
              <ul className="flex flex-wrap gap-2">{s.items.map((it) => <li key={it} className="chip">{it}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
