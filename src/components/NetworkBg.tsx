import { useEffect, useRef } from 'react'
const N = 50
export default function NetworkBg() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current!, ctx = c.getContext('2d')!
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, raf = 0
    const dpr = Math.min(devicePixelRatio || 1, 2)
    const size = () => { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0) }
    size()
    const nodes = Array.from({ length: N }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }))
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const a of nodes) {
        if (!reduce) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1 }
        for (const b of nodes) { const d = Math.hypot(a.x - b.x, a.y - b.y); if (d < 100) { ctx.strokeStyle = `rgba(34,211,238,${(1 - d / 100) * .25})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke() } }
      }
      ctx.fillStyle = 'rgba(139,92,246,.8)'
      for (const a of nodes) { ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 7); ctx.fill() }
      if (!reduce) raf = requestAnimationFrame(draw)
    }
    const vis = () => { cancelAnimationFrame(raf); if (!document.hidden) draw() }
    draw(); document.addEventListener('visibilitychange', vis); addEventListener('resize', size)
    return () => { cancelAnimationFrame(raf); document.removeEventListener('visibilitychange', vis); removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />
}
