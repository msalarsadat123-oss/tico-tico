export type Item = { h: string; p: string }
export type Sec = { id: string; kicker: string; title: string; body: string; items?: Item[] }
export type Locale = {
  /** Language name written in that language (shown in the language menu) */
  name: string
  dir: 'ltr' | 'rtl'
  ui: { comingSoon: string; menu: string; language: string }
  /** Same 8 section ids, same order, in every language */
  sections: Sec[]
}
