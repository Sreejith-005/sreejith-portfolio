import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
export const NAV = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'achievements', 'contact']
const cap = (s: string) => s[0].toUpperCase() + s.slice(1)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    NAV.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  const link = (id: string, mobile = false) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}
      className={`flex min-h-[44px] items-center rounded-lg px-3 text-sm transition ${mobile ? 'text-base' : ''} ${active === id ? 'text-cyan' : 'text-muted hover:text-ink'}`}>{cap(id)}</a>
  )
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled || open ? 'border-b border-white/[0.08] bg-bg/70 backdrop-blur-lg' : 'border-b border-transparent'}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#home" className="leading-tight" aria-label="Sreejith T, home">
          <span className="block font-head text-lg font-bold tracking-wide">SREEJITH.T</span>
          <span className="block font-head text-[10px] tracking-[0.3em] text-cyan">DATA × AI</span>
        </a>
        <nav aria-label="Primary" className="hidden lg:flex">{NAV.map((i) => link(i))}</nav>
        <button className="flex h-11 w-11 items-center justify-center rounded-lg lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav id="drawer" aria-label="Mobile" className="wrap flex flex-col pb-4 lg:hidden">{NAV.map((i) => link(i, true))}</nav>}
    </header>
  )
}
