import { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import { Boundary } from './Boundary'
import { locales, detectLang, saveLang, type Lang, type Item } from './content'
import { LangMenu } from './LangMenu'
import { pages, type RAct } from './pages'
import { RobotStage, webglOk, type Act } from './Robot'

// Background canvas: particles don't need high pixel density or antialiasing; lower values keep it smooth on weaker devices.
const BG_DPR: [number, number] = [1, 1.25]
const BG_CAM = { position: [0, 0, 9] as [number, number, number], fov: 55 }
const ROUTES = ['home', 'flow', 'guard', 'support', 'contact'] as const
type Route = typeof ROUTES[number]
const parse = (): Route => { const h = location.hash.replace(/^#\/?/, ''); return (ROUTES as readonly string[]).includes(h) ? h as Route : 'home' }
const href = (r: Route) => (r === 'home' ? '#/' : '#/' + r)
function useRoute() {
  const [r, setR] = useState<Route>(parse)
  useEffect(() => { const f = () => setR(parse()); addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, [])
  return r
}

// Particle formation for each Home section (same order as before); other pages set their own.
const HOME_FORMS = [0, 0, 2, 1, 4, 3, 3, 0]
// Sections whose text gently floats up and down. Add an id here to make another section "alive".
const ALIVE = new Set(['about'])

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    if (!('IntersectionObserver' in window)) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <div ref={ref} className={'reveal' + (on ? ' on' : '')}>{children}</div>
}

const glow = (e: React.MouseEvent<HTMLDivElement>) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px'); e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px') }
const Cards = ({ items }: { items: Item[] }) => <div className="grid">{items.map((it, n) => <div className="card" key={it.h} onMouseMove={glow}><span className="num">0{n + 1}</span><h3>{it.h}</h3><p>{it.p}</p></div>)}</div>
const Head = ({ kicker, title, body, h1 }: { kicker: string; title: string; body: string; h1?: boolean }) => (
  <><p className="kick">{kicker}</p>{h1 ? <h1>{title}</h1> : <h2>{title}</h2>}<p className="body">{body}</p></>
)

/** Robot + its action buttons + speech bubble (used by the TicoGuard and Support pages). */
function RobotPanel({ variant, actions, label, tag, hint }: { variant: 'guard' | 'support'; actions: RAct[]; label: string; tag: string; hint?: string }) {
  const [act, setAct] = useState<Act>({ name: '', id: 0 })
  const [say, setSay] = useState('')
  const poke = useRef(0)
  const run = (a: RAct) => { setAct({ name: a.key, id: Date.now() }); setSay(a.reply) }
  return (
    <div className="robot-panel">
      <RobotStage variant={variant} act={act} label={label} onPoke={() => run(actions[poke.current++ % actions.length])} />
      <span className="tag">{tag}</span>
      <div className="chips">{actions.map(a => <button key={a.key + a.label} type="button" className="chip" onClick={() => run(a)}>{a.label}</button>)}</div>
      <p className={'bubble' + (say || hint ? '' : ' empty')} aria-live="polite">{say || hint || '\u00a0'}</p>
    </div>
  )
}

export default function App() {
  const [gl] = useState(webglOk)
  const route = useRoute()
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<Lang>(detectLang)
  const L = locales[lang], P = pages[lang], sections = L.sections
  const navRef = useRef<HTMLElement>(null)
  const [compact, setCompact] = useState(false)
  // Longer languages (German, French...) need more room: if brand + links + language button don't fit, use the menu button instead.
  useLayoutEffect(() => {
    const nav = navRef.current; if (!nav) return
    const q = (sel: string) => nav.querySelector<HTMLElement>(sel)
    const check = () => {
      const b = q('.brand'), l = q('.links'), e = q('.lang'); if (!b || !l || !e) return
      const inner = nav.clientWidth - 2 * parseFloat(getComputedStyle(nav).paddingLeft)
      setCompact(b.offsetWidth + l.offsetWidth + e.offsetWidth + 120 > inner)
    }
    check()
    const ro = new ResizeObserver(check)
    ;[nav, q('.brand'), q('.links'), q('.lang')].forEach(el => el && ro.observe(el))
    document.fonts?.ready.then(check)
    return () => ro.disconnect()
  }, [lang])
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = L.dir; saveLang(lang) }, [lang, L.dir])
  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [route])
  const reduced = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  const links = ROUTES.filter(r => r !== 'home').map(r => ({ r, label: P.nav[r] }))
  return (
    <>
      {gl && (
        <div className="stage" aria-hidden="true">
          <Boundary fallback={null}>
            <Canvas dpr={BG_DPR} camera={BG_CAM} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
              onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}>
              <Suspense fallback={null}><Scene reduced={reduced.current} route={route} calm={route !== 'home'} /></Suspense>
            </Canvas>
          </Boundary>
        </div>
      )}
      <nav className={'nav' + (compact ? ' compact' : '')} ref={navRef}>
        <a className="brand" href={href('home')} aria-label="TicoTico"><span className="kao">(っ◔◡◔)っ</span> <span className="hrt">♥</span> tico tico <span className="hrt">♥</span></a>
        <div className="links">{ROUTES.map(r => <a key={r} href={href(r)} className={route === r ? 'act' : ''}>{P.nav[r]}</a>)}</div>
        <div className="nav-end"><LangMenu lang={lang} onChange={setLang} label={L.ui.language} /><button className="burger" aria-label={L.ui.menu} aria-expanded={open} onClick={() => setOpen(o => !o)}>{open ? '✕' : '☰'}</button></div>
        <div className={'sheet' + (open ? ' open' : '')}>{ROUTES.map(r => <a key={r} href={href(r)} className={route === r ? 'act' : ''} onClick={() => setOpen(false)}>{P.nav[r]}</a>)}</div>
      </nav>
      <main key={route + lang}>
        {route === 'home' && sections.map((s, i) => (
          <section key={s.id} id={s.id} data-sec={i} data-form={HOME_FORMS[i]} className={[i === 0 ? 'hero' : '', ALIVE.has(s.id) ? 'alive' : ''].join(' ').trim()}>
            <Reveal>
              <Head kicker={s.kicker} title={s.title} body={s.body} h1={i === 0} />
              {s.items && <Cards items={s.items} />}
              {s.id === 'cta' && <button type="button" className="btn" aria-disabled="true" onClick={e => e.preventDefault()}>{L.ui.comingSoon}</button>}
            </Reveal>
          </section>
        ))}
        {route === 'flow' && (
          <section data-form={2}><Reveal><Head h1 {...P.flow} /><Cards items={P.flow.items} /></Reveal></section>
        )}
        {route === 'guard' && (
          <>
            <section data-form={4} className="split"><div className="split-in">
              <Reveal><Head h1 {...P.guard} /></Reveal>
              <RobotPanel variant="guard" actions={P.guard.actions} label={P.demo} tag={P.demo} />
            </div></section>
            <section data-form={4} className="tight"><Reveal><Cards items={P.guard.items} /></Reveal></section>
          </>
        )}
        {route === 'support' && (
          <section data-form={0} className="split"><div className="split-in">
            <Reveal><Head h1 {...P.support} /></Reveal>
            <RobotPanel variant="support" actions={P.support.actions} label={P.demo} tag={P.demo} hint={P.support.hint} />
          </div></section>
        )}
        {route === 'contact' && (
          <section data-form={1}><Reveal><Head h1 {...P.contact} /><button type="button" className="btn" aria-disabled="true" onClick={e => e.preventDefault()}>{L.ui.comingSoon}</button></Reveal></section>
        )}
      </main>
      <footer>© TicoTico</footer>
    </>
  )
}
