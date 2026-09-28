import { profile } from '../data/profile'
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10">
      <div className="wrap flex flex-col items-center gap-3 text-center text-sm text-muted">
        <p className="font-head text-lg font-bold text-ink">SREEJITH.T</p>
        <p>Data Science × AI × Generative AI</p>
        <nav aria-label="Social" className="flex gap-2">
          <a className="flex min-h-[44px] items-center px-3 hover:text-cyan" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="flex min-h-[44px] items-center px-3 hover:text-cyan" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="flex min-h-[44px] items-center px-3 hover:text-cyan" href={`mailto:${profile.email}`}>Email</a>
        </nav>
        <p>© 2026 Sreejith T. All rights reserved.</p>
      </div>
    </footer>
  )
}
