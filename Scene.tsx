import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Particle count by device tier (same tiers as the previous build)
const N = (() => { const w = window.innerWidth, c = navigator.hardwareConcurrency || 4; return w < 700 || c <= 4 ? 700 : 1800 })()
const rnd = (n: number) => (Math.random() - 0.5) * n

// Formations: 0 sphere, 1 ring, 2 band, 3 cluster nodes, 4 dome/shield
function shape(kind: number, i: number, out: Float32Array) {
  const t = i / N, a = t * Math.PI * 2 * 17, R = 3
  let x = 0, y = 0, z = 0
  if (kind === 0) { const f = Math.acos(1 - 2 * t); x = R * Math.sin(f) * Math.cos(a); y = R * Math.cos(f); z = R * Math.sin(f) * Math.sin(a) }
  else if (kind === 1) { const f = t * Math.PI * 2; x = 3.6 * Math.cos(f) + rnd(0.3); y = rnd(0.4); z = 3.6 * Math.sin(f) + rnd(0.3) }
  else if (kind === 2) { x = (t - 0.5) * 12; y = Math.sin(t * 18) * 1.2 + rnd(0.4); z = rnd(2) }
  else if (kind === 3) { const f = i % 6; x = Math.cos(f) * 3 + rnd(1.4); y = Math.sin(f * 1.7) * 2 + rnd(1.4); z = rnd(2.4) }
  else { const f = Math.acos(1 - t); x = R * Math.sin(f) * Math.cos(a); y = Math.abs(R * Math.cos(f)) - 1; z = R * Math.sin(f) * Math.sin(a) }
  out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = z
}

/** `route` changes whenever the page changes, so the section list is re-read. Each section declares its formation with data-form. */
export default function Scene({ reduced, route, calm }: { reduced: boolean; route: string; calm: boolean }) {
  const pts = useRef<THREE.Points>(null)
  const core = useRef<THREE.Mesh>(null)
  const secs = useRef<HTMLElement[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const forms = useMemo(() => [0, 1, 2, 3, 4].map(k => { const f = new Float32Array(N * 3); for (let i = 0; i < N; i++) shape(k, i, f); return f }), [])
  const cur = useMemo(() => new Float32Array(forms[0]), [forms])
  useEffect(() => {
    const mv = (e: PointerEvent) => { mouse.current.x = e.clientX / innerWidth - 0.5; mouse.current.y = e.clientY / innerHeight - 0.5 }
    addEventListener('pointermove', mv); return () => removeEventListener('pointermove', mv)
  }, [])
  useEffect(() => { secs.current = [] }, [route])

  const fr = useRef(0), formRef = useRef(0), maxScroll = useRef(1)
  useFrame(({ camera, clock }, dt) => {
    // Layout reads (getBoundingClientRect / scrollHeight) force the browser to recalculate layout, so do them only every 8th frame.
    if (fr.current++ % 8 === 0) {
      if (!secs.current.length) secs.current = Array.from(document.querySelectorAll<HTMLElement>('[data-form]'))
      const mid = innerHeight / 2
      let best = 1e9
      secs.current.forEach(el => {
        const r = el.getBoundingClientRect(), d = Math.abs(r.top + r.height / 2 - mid)
        if (d < best) { best = d; formRef.current = Number(el.dataset.form) || 0 }
      })
      maxScroll.current = Math.max(1, document.body.scrollHeight - innerHeight)
    }
    const target = forms[formRef.current], k = reduced ? 1 : 1 - Math.exp(-dt * 2.5)
    let moved = 0
    for (let i = 0; i < cur.length; i++) { const d = target[i] - cur[i]; cur[i] += d * k; if (d > moved) moved = d; else if (-d > moved) moved = -d }
    const p = pts.current!
    if (moved > 0.0005) (p.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true // skip the GPU upload once the shape has settled
    // Particles are a bit fainter on inner pages; the wireframe ball stays visible on every page.
    const small = innerWidth < 760 ? 0.75 : 1
    const mat = p.material as THREE.PointsMaterial, want = (calm ? 0.55 : 0.7) * small
    mat.opacity += (want - mat.opacity) * 0.08
    if (core.current) { const m = core.current.material as THREE.MeshBasicMaterial; m.opacity = 0.35 * small; core.current.visible = true }
    const s = scrollY / maxScroll.current, t = reduced ? 0 : clock.elapsedTime
    p.rotation.y = t * 0.08 + s * 4
    camera.position.x += (mouse.current.x * 1.6 - camera.position.x) * 0.05
    camera.position.y += (-mouse.current.y * 1.2 - camera.position.y) * 0.05
    camera.position.z = 9 - s * 2.5
    camera.lookAt(0, 0, 0)
    if (core.current) { core.current.rotation.x = t * 0.3; core.current.rotation.y = t * 0.4; core.current.scale.setScalar(0.9 + Math.sin(t) * 0.06) }
  })
  return (
    <>
      <points ref={pts}>
        <bufferGeometry><bufferAttribute attach="attributes-position" count={N} array={cur} itemSize={3} /></bufferGeometry>
        <pointsMaterial size={0.045} color="#57f2c5" transparent opacity={0.85} depthWrite={false} blending={THREE.AdditiveBlending} sizeAttenuation />
      </points>
      <mesh ref={core}><icosahedronGeometry args={[1, 1]} /><meshBasicMaterial color="#7c8cff" wireframe transparent opacity={0.35} /></mesh>
    </>
  )
}
