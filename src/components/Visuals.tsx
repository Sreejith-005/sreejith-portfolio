import type { Project } from '../data/projects'
// CSS/SVG mockups only. No screenshots, no data values.
const Bubble = ({ me, w }: { me?: boolean; w: string }) => (
  <div className={`h-3 rounded-full ${me ? 'ml-auto bg-violet/50' : 'bg-white/15'}`} style={{ width: w }} />
)
function Chat() {
  return (
    <div className="flex h-full flex-col justify-end gap-2 p-5">
      <Bubble me w="45%" /><Bubble w="70%" /><Bubble me w="35%" /><Bubble w="80%" />
      <div className="mt-2 h-8 rounded-lg border border-white/10 bg-white/[0.04]" />
    </div>
  )
}
function Pipeline() {
  const xs = [30, 100, 170, 240, 310, 380, 450]
  return (
    <svg viewBox="0 0 480 160" className="h-full w-full" role="img" aria-label="RAG pipeline illustration">
      <defs><linearGradient id="pg" x1="0" x2="1"><stop stopColor="#22D3EE" /><stop offset="1" stopColor="#8B5CF6" /></linearGradient></defs>
      <line x1="30" y1="80" x2="450" y2="80" stroke="url(#pg)" strokeWidth="2" strokeDasharray="4 4" />
      {xs.map((x, i) => <rect key={x} x={x - 16} y={i % 2 ? 46 : 84} width="32" height="30" rx="8" fill="#0d1220" stroke="url(#pg)" />)}
    </svg>
  )
}
function Dash() {
  return (
    <div className="relative h-full p-5">
      <span className="absolute right-3 top-2 text-[10px] text-muted">Dashboard preview (illustrative)</span>
      <div className="mt-4 grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <div key={i} className="h-8 rounded-lg bg-white/[0.06]" />)}</div>
      <div className="mt-3 flex h-20 items-end gap-2">
        {['40%', '65%', '50%', '80%', '55%', '70%'].map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet/60 to-cyan/60" style={{ height: h }} />)}
      </div>
    </div>
  )
}
export default function Visual({ category }: { category: Project['category'] }) {
  return <div aria-hidden={category !== 'rag'} className="h-full w-full bg-gradient-to-br from-white/[0.05] to-transparent">{category === 'chat' ? <Chat /> : category === 'rag' ? <Pipeline /> : <Dash />}</div>
}
