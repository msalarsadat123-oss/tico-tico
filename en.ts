import type { Locale } from '../types'
const en: Locale = {
  name: 'English', dir: 'ltr',
  ui: { comingSoon: 'Coming soon', menu: 'Menu', language: 'Language' },
  sections: [
    { id: 'hero', kicker: 'TicoTico', title: 'Short video, built for the whole world.', body: 'A global-first short-form video platform, designed Android-first. Discover, create, connect and share.' },
    { id: 'about', kicker: 'About', title: 'A new home for short-form stories.', body: 'TicoTico is a short-form video app made for people everywhere, starting where most of the world already is: Android.' },
    { id: 'features', kicker: 'Features', title: 'Made to feel effortless.', body: 'The core of the experience, in four ideas.', items: [
      { h: 'Vertical feed', p: 'A full-screen, swipe-first way to watch.' },
      { h: 'Creator tools', p: 'Record, edit and publish from one place.' },
      { h: 'Global-first', p: 'Designed for many languages and regions from day one.' },
      { h: 'Fast on any phone', p: 'Tuned to run smoothly on everyday devices.' } ] },
    { id: 'ticoflow', kicker: 'TicoFlow', title: 'Discovery that flows.', body: 'TicoFlow is the idea behind how content is found and shown: a continuous stream that adapts to what you enjoy.' },
    { id: 'ticoguard', kicker: 'TicoGuard', title: 'Safety and trust, by design.', body: 'TicoGuard is our approach to keeping the community safe: clear rules, reporting tools and respect for people.' },
    { id: 'creators', kicker: 'Creators', title: 'Where creators begin.', body: 'Tools and a feed that help new voices be seen, and give creators room to grow their own style.' },
    { id: 'social', kicker: 'Social World', title: 'Four ways to belong.', body: 'Everything on TicoTico connects through four actions.', items: [
      { h: 'Discover', p: 'Find videos, people and ideas.' }, { h: 'Create', p: 'Turn moments into videos.' },
      { h: 'Connect', p: 'Follow, comment and chat.' }, { h: 'Share', p: 'Send favorites to friends anywhere.' } ] },
    { id: 'cta', kicker: 'Join the Journey', title: 'Be part of what comes next.', body: 'TicoTico is under construction. Follow along as it takes shape.' },
  ],
}
export default en
