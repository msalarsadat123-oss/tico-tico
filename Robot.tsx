import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import type * as THREE from 'three'
import { Boundary } from './Boundary'

export type ActKey = 'wave' | 'jump' | 'spin' | 'scan'
export type Act = { name: ActKey | ''; id: number }
export type Variant = 'guard' | 'support'

let glOk: boolean | undefined
/** Checked once: creating a test WebGL context on every call wastes time and can exhaust the browser's context limit. */
export function webglOk() {
  if (glOk === undefined) { try { const c = document.createElement('canvas'); glOk = !!(c.getContext('webgl2') || c.getContext('webgl')) } catch { glOk = false } }
  return glOk
}
const CAM = { position: [0, 0.5, 7.6] as [number, number, number], fov: 35 }
const DPR: [number, number] = innerWidth < 760 ? [1, 1] : [1, 1.5]
const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)

function Bot({ v, act, reduced, onPoke }: { v: Variant; act: Act; reduced: boolean; onPoke: () => void }) {
  const root = useRef<THREE.Group>(null), head = useRef<THREE.Group>(null)
  const armL = useRef<THREE.Group>(null), armR = useRef<THREE.Group>(null)
  const eyeL = useRef<THREE.Mesh>(null), eyeR = useRef<THREE.Mesh>(null), ring = useRef<THREE.Mesh>(null)
  const start = useRef({ id: -1, t: 0 }), ptr = useRef({ x: 0, y: 0 })
  const big = v === 'support'
  const body = big ? '#eef1ff' : '#2a3366', hd = big ? [1.8, 1.35, 1.3] as const : [1.6, 1.1, 1.1] as const
  useEffect(() => {
    const m = (e: PointerEvent) => { ptr.current.x = (e.clientX / innerWidth - 0.5) * 2; ptr.current.y = (e.clientY / innerHeight - 0.5) * 2 }
    addEventListener('pointermove', m); return () => removeEventListener('pointermove', m)
  }, [])

  useFrame(({ clock }, dt) => {
    const now = clock.elapsedTime, t = reduced ? 0 : now
    if (act.id !== start.current.id) start.current = { id: act.id, t: now }
    const dur = act.name === 'spin' ? 1.4 : 1.8
    const p = act.name ? Math.min(1, (now - start.current.t) / dur) : 1
    const on = !reduced && !!act.name && p < 1, a = on ? act.name : ''
    const g = root.current!, h = head.current!
    g.position.y = Math.sin(t * 1.6) * (big ? 0.14 : 0.1) + (a === 'jump' ? Math.abs(Math.sin(p * Math.PI * 2)) * (big ? 0.6 : 0.5) : 0)
    g.rotation.y = a === 'spin' ? ease(p) * Math.PI * 2 : 0
    h.rotation.y += ((reduced ? 0 : ptr.current.x * 0.5) - h.rotation.y) * 0.08
    h.rotation.x += ((reduced ? 0 : ptr.current.y * 0.3) - h.rotation.x) * 0.08
    const sway = Math.sin(t * 1.6) * 0.05
    armR.current!.rotation.z = a === 'wave' ? 2.5 + Math.sin(now * 14) * 0.35 : a === 'jump' ? 2.6 : 0.25 + sway
    armL.current!.rotation.z = a === 'jump' ? -2.6 : -0.25 - sway
    const blink = !reduced && now % 3.6 < 0.12 ? 0.1 : 1, pulse = a === 'scan' ? 1 + Math.sin(p * Math.PI * 6) * 0.3 : 1
    eyeL.current!.scale.set(pulse, blink * pulse, pulse); eyeR.current!.scale.set(pulse, blink * pulse, pulse)
    if (ring.current) {
      ring.current.rotation.z += dt * 0.8
      ring.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.03 + (a === 'scan' ? Math.sin(p * Math.PI) * 0.9 : 0))
    }
  })

  const z = hd[2] / 2
  return (
    <group ref={root} onClick={onPoke} onPointerOver={() => { document.body.style.cursor = 'pointer' }} onPointerOut={() => { document.body.style.cursor = '' }}>
      <RoundedBox args={[1.3, 1.2, 0.9]} radius={0.35} smoothness={3} position={[0, -0.75, 0]}><meshStandardMaterial color={body} roughness={0.4} metalness={0.2} /></RoundedBox>
      <mesh position={[0, -0.7, 0.46]}><circleGeometry args={[0.16, 24]} /><meshBasicMaterial color="#57f2c5" /></mesh>
      {[-1, 1].map(s => (
        <group key={s} ref={s < 0 ? armL : armR} position={[s * 0.85, -0.35, 0]}>
          <mesh position={[0, -0.35, 0]}><capsuleGeometry args={[0.14, 0.5, 6, 12]} /><meshStandardMaterial color={body} roughness={0.4} metalness={0.2} /></mesh>
        </group>
      ))}
      <group ref={head} position={[0, 0.55, 0]}>
        <RoundedBox args={[...hd]} radius={0.4} smoothness={3}><meshStandardMaterial color={body} roughness={0.4} metalness={0.2} /></RoundedBox>
        <RoundedBox args={[big ? 1.45 : 1.3, big ? 0.95 : 0.75, 0.1]} radius={0.15} position={[0, 0.02, z - 0.02]}><meshStandardMaterial color="#0b0e1a" roughness={0.3} /></RoundedBox>
        {[-1, 1].map(s => (
          <mesh key={s} ref={s < 0 ? eyeL : eyeR} position={[s * 0.33, 0.12, z + 0.06]}>
            <sphereGeometry args={[0.13, 20, 20]} /><meshStandardMaterial color="#57f2c5" emissive="#57f2c5" emissiveIntensity={1.4} />
          </mesh>
        ))}
        {big ? (
          <>
            <mesh position={[0, -0.13, z + 0.06]} rotation={[0, 0, Math.PI]}><torusGeometry args={[0.17, 0.035, 8, 20, Math.PI]} /><meshBasicMaterial color="#57f2c5" /></mesh>
            {[-1, 1].map(s => <mesh key={s} position={[s * 0.58, -0.05, z + 0.055]}><circleGeometry args={[0.12, 20]} /><meshBasicMaterial color="#ff7ac8" transparent opacity={0.65} /></mesh>)}
          </>
        ) : (
          <mesh position={[0, -0.14, z + 0.06]}><boxGeometry args={[0.3, 0.04, 0.02]} /><meshBasicMaterial color="#57f2c5" /></mesh>
        )}
        <mesh position={[0, hd[1] / 2 + 0.17, 0]}><cylinderGeometry args={[0.03, 0.03, 0.35, 8]} /><meshStandardMaterial color="#9aa3b5" /></mesh>
        <mesh position={[0, hd[1] / 2 + 0.38, 0]}><sphereGeometry args={[0.1, 16, 16]} /><meshStandardMaterial color={big ? '#ff7ac8' : '#7c8cff'} emissive={big ? '#ff7ac8' : '#7c8cff'} emissiveIntensity={1.2} /></mesh>
      </group>
      {!big && <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.2, 0]}><torusGeometry args={[1.55, 0.03, 12, 80]} /><meshBasicMaterial color="#57f2c5" transparent opacity={0.55} /></mesh>}
    </group>
  )
}

export function RobotStage({ variant, act, onPoke, label }: { variant: Variant; act: Act; onPoke: () => void; label: string }) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  const box = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(true)
  // Stop rendering the robot while it is scrolled out of view or the tab is hidden
  useEffect(() => {
    const el = box.current; if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setVis(e.isIntersecting)); io.observe(el); return () => io.disconnect()
  }, [])
  const fb = <span className="robot-fb">(っ◔◡◔)っ</span>
  return (
    <div className="robot-wrap" ref={box} role="img" aria-label={label}>
      {webglOk() ? (
        <Boundary fallback={fb}>
          <Canvas dpr={DPR} frameloop={vis ? 'always' : 'never'} camera={CAM} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 4, 5]} intensity={1.6} />
            <pointLight position={[-3, -1, 2]} intensity={12} color="#57f2c5" />
            <Bot v={variant} act={act} reduced={reduced} onPoke={onPoke} />
          </Canvas>
        </Boundary>
      ) : fb}
    </div>
  )
}
