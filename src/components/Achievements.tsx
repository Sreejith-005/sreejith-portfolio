import { Trophy } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal, { Heading } from './Reveal'
export default function Achievements() {
  return (
    <div className="wrap">
      <Heading id="achievements" label="Achievements" title="Academic recognition" />
      <Reveal>
        <div className="glass flex max-w-2xl gap-4 p-6">
          <Trophy className="shrink-0 text-cyan" size={32} aria-hidden />
          <div><h3 className="font-head text-xl font-semibold">{profile.achievement.title}</h3><p className="mt-1 text-muted">{profile.achievement.text}</p></div>
        </div>
      </Reveal>
    </div>
  )
}
