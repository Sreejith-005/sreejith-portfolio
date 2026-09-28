import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal, { Heading } from './Reveal'

type F = { name: string; email: string; subject: string; message: string }
export default function Contact() {
  const [f, setF] = useState<F>({ name: '', email: '', subject: '', message: '' })
  const [errs, setErrs] = useState<string[]>([])
  const set = (k: keyof F) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: string[] = []
    if (!f.name.trim()) er.push('Please enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.push('Please enter a valid email address.')
    if (!f.subject.trim()) er.push('Please enter a subject.')
    if (f.message.trim().length < 10) er.push('Message should be at least 10 characters.')
    setErrs(er)
    if (er.length) return
    const body = `${f.message}\n\n— ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
  }
  const links = [
    { I: Mail, t: profile.email, h: `mailto:${profile.email}` }, { I: Phone, t: profile.phone, h: `tel:+91${profile.phone}` },
    { I: MapPin, t: profile.location }, { I: Linkedin, t: 'linkedin.com/in/sreejith005', h: profile.linkedin }, { I: Github, t: 'github.com/Sreejith-005', h: profile.github },
  ]
  const field = 'w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3 text-sm placeholder:text-muted'
  return (
    <div className="wrap">
      <Heading id="contact" label="Contact" title="Let's Build Something Intelligent." />
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="mb-6 text-muted">Have an opportunity, project idea, or just want to connect? Feel free to reach out.</p>
          <ul className="space-y-2">
            {links.map(({ I, t, h }) => (
              <li key={t}>{h ? <a href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex min-h-[44px] items-center gap-3 hover:text-cyan"><I size={18} className="text-cyan" aria-hidden />{t}</a>
                : <span className="flex min-h-[44px] items-center gap-3"><I size={18} className="text-cyan" aria-hidden />{t}</span>}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="glass space-y-3 p-5">
            <label className="block text-sm">Name<input className={field} value={f.name} onChange={set('name')} autoComplete="name" required /></label>
            <label className="block text-sm">Email<input type="email" className={field} value={f.email} onChange={set('email')} autoComplete="email" required /></label>
            <label className="block text-sm">Subject<input className={field} value={f.subject} onChange={set('subject')} required /></label>
            <label className="block text-sm">Message<textarea rows={5} className={field} value={f.message} onChange={set('message')} required /></label>
            <div aria-live="polite" className="text-sm text-red-300">{errs.map((e) => <p key={e}>{e}</p>)}</div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
            <p className="text-xs text-muted">This opens your email app. Nothing is sent from this page.</p>
          </form>
        </Reveal>
      </div>
    </div>
  )
}
