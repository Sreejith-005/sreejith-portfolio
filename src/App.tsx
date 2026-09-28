import { lazy, Suspense, useEffect, useRef, useState, type ComponentType } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const Education = lazy(() => import('./components/Education'))
const Certifications = lazy(() => import('./components/Certifications'))
const Achievements = lazy(() => import('./components/Achievements'))
const WhatIBuild = lazy(() => import('./components/WhatIBuild'))
const TechStack = lazy(() => import('./components/TechStack'))
const Contact = lazy(() => import('./components/Contact'))

// Wrapper keeps the section landmark + id stable; below-the-fold content mounts when near the viewport.
function Sect({ id, C, eager, cls = 'section' }: { id: string; C: ComponentType; eager?: boolean; cls?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [show, setShow] = useState(!!eager)
  useEffect(() => {
    if (show || !ref.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect() } }, { rootMargin: '800px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [show])
  return (
    <section ref={ref} id={id} aria-labelledby={`${id}-h`} className={cls}>
      {show ? <Suspense fallback={<div className="min-h-[300px]" />}><C /></Suspense> : <div className="min-h-[300px]" />}
    </section>
  )
}

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only z-50 rounded bg-cyan px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main id="main">
        <section id="home" aria-label="Introduction"><Hero /></section>
        <Sect id="about" C={About} eager />
        <Sect id="skills" C={Skills} eager />
        <Sect id="projects" C={Projects} eager />
        <Sect id="education" C={Education} />
        <Sect id="certifications" C={Certifications} />
        <Sect id="achievements" C={Achievements} />
        <Sect id="what" C={WhatIBuild} />
        <Sect id="stack" C={TechStack} cls="pb-16" />
        <Sect id="contact" C={Contact} />
      </main>
      <Footer />
    </>
  )
}
