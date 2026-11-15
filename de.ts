import type { Locale } from '../types'
const de: Locale = {
  name: 'Deutsch', dir: 'ltr',
  ui: { comingSoon: 'Demnächst', menu: 'Menü', language: 'Sprache' },
  sections: [
    { id: 'hero', kicker: 'TicoTico', title: 'Kurzvideos – für die ganze Welt gemacht.', body: 'Eine globale Plattform für Kurzvideos, zuerst für Android entwickelt. Entdecken, erstellen, vernetzen und teilen.' },
    { id: 'about', kicker: 'Über uns', title: 'Ein neues Zuhause für Geschichten im Kurzformat.', body: 'TicoTico ist eine App für Kurzvideos, gemacht für Menschen überall – und sie beginnt dort, wo die meisten bereits sind: auf Android.' },
    { id: 'features', kicker: 'Funktionen', title: 'Gemacht, damit alles leichtfällt.', body: 'Das Herzstück des Erlebnisses in vier Ideen.', items: [
      { h: 'Vertikaler Feed', p: 'Ein Vollbild-Erlebnis, bei dem man einfach wischt.' },
      { h: 'Creator-Tools', p: 'Aufnehmen, bearbeiten und veröffentlichen – alles an einem Ort.' },
      { h: 'Von Anfang an global', p: 'Vom ersten Tag an für viele Sprachen und Regionen entwickelt.' },
      { h: 'Schnell auf jedem Handy', p: 'Optimiert für flüssigen Betrieb auf Alltagsgeräten.' } ] },
    { id: 'ticoflow', kicker: 'TicoFlow', title: 'Entdecken im Fluss.', body: 'TicoFlow ist die Idee dahinter, wie Inhalte gefunden und angezeigt werden: ein kontinuierlicher Strom, der sich an das anpasst, was dir gefällt.' },
    { id: 'ticoguard', kicker: 'TicoGuard', title: 'Sicherheit und Vertrauen von Grund auf.', body: 'TicoGuard ist unser Ansatz, die Community zu schützen: klare Regeln, Meldefunktionen und Respekt gegenüber Menschen.' },
    { id: 'creators', kicker: 'Creator', title: 'Wo Creator ihren Anfang nehmen.', body: 'Tools und ein Feed, die neuen Stimmen Sichtbarkeit geben und Creators Raum lassen, ihren eigenen Stil zu entwickeln.' },
    { id: 'social', kicker: 'Soziale Welt', title: 'Vier Wege, dazuzugehören.', body: 'Auf TicoTico hängt alles über vier Handlungen zusammen.', items: [
      { h: 'Entdecken', p: 'Finde Videos, Menschen und Ideen.' }, { h: 'Erstellen', p: 'Mach aus Momenten Videos.' },
      { h: 'Vernetzen', p: 'Folge, kommentiere und chatte.' }, { h: 'Teilen', p: 'Sende Favoriten an Freunde – überall.' } ] },
    { id: 'cta', kicker: 'Sei Teil der Reise', title: 'Sei Teil dessen, was als Nächstes kommt.', body: 'TicoTico befindet sich im Aufbau. Verfolge, wie es Gestalt annimmt.' },
  ],
}
export default de
