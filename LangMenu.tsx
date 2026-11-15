import { useEffect, useRef, useState } from 'react'
import { LANGS, locales, type Lang } from './content'

export function LangMenu({ lang, onChange, label }: { lang: Lang; onChange: (l: Lang) => void; label: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const away = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('pointerdown', away); window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('pointerdown', away); window.removeEventListener('keydown', esc) }
  }, [open])
  return (
    <div className="lang" ref={ref}>
      <button type="button" className="lang-btn" aria-label={label} aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9S9.4 5.7 12 3z" /></svg>
        <span>{lang.toUpperCase()}</span>
      </button>
      <ul className={'lang-list' + (open ? ' open' : '')}>
        {LANGS.map(l => (
          <li key={l}>
            <button type="button" lang={l} dir={locales[l].dir} className={l === lang ? 'on' : ''} aria-current={l === lang}
              onClick={() => { onChange(l); setOpen(false) }}>{locales[l].name}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
