// Language registry. To add a language: create src/locales/<code>.ts (copy en.ts),
// import it here and add it to `locales` — the menu, direction (LTR/RTL) and saved choice all follow automatically.
import type { Locale } from './types'
import en from './locales/en'
import de from './locales/de'
import fr from './locales/fr'
import es from './locales/es'
import ar from './locales/ar'
import fa from './locales/fa'

export type { Sec, Item, Locale } from './types'

export const locales = { en, de, fr, es, ar, fa } satisfies Record<string, Locale>
export type Lang = keyof typeof locales
export const LANGS = Object.keys(locales) as Lang[]

const KEY = 'ticotico-lang'
const isLang = (v: unknown): v is Lang => typeof v === 'string' && v in locales

/** Saved choice first, then the browser's language list, then English. */
export function detectLang(): Lang {
  try { const s = localStorage.getItem(KEY); if (isLang(s)) return s } catch { /* storage unavailable */ }
  for (const l of navigator.languages ?? [navigator.language]) {
    const code = l.slice(0, 2).toLowerCase()
    if (isLang(code)) return code
  }
  return 'en'
}
export function saveLang(l: Lang) { try { localStorage.setItem(KEY, l) } catch { /* ignore */ } }
