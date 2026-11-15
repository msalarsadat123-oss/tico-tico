import type { Locale } from '../types'
const fr: Locale = {
  name: 'Français', dir: 'ltr',
  ui: { comingSoon: 'Bientôt disponible', menu: 'Menu', language: 'Langue' },
  sections: [
    { id: 'hero', kicker: 'TicoTico', title: 'Des vidéos courtes, conçues pour le monde entier.', body: 'Une plateforme de vidéos courtes à vocation mondiale, conçue d’abord pour Android. Découvrez, créez, connectez-vous et partagez.' },
    { id: 'about', kicker: 'À propos', title: 'Un nouveau foyer pour les histoires courtes.', body: 'TicoTico est une application de vidéos courtes faite pour tout le monde, en commençant là où se trouve déjà la majorité de la planète : Android.' },
    { id: 'features', kicker: 'Fonctionnalités', title: 'Conçu pour être sans effort.', body: 'Le cœur de l’expérience, en quatre idées.', items: [
      { h: 'Flux vertical', p: 'Une façon de regarder en plein écran, pensée pour le balayage.' },
      { h: 'Outils de création', p: 'Filmez, montez et publiez au même endroit.' },
      { h: 'Mondial dès le départ', p: 'Pensé pour de nombreuses langues et régions dès le premier jour.' },
      { h: 'Rapide sur tout téléphone', p: 'Optimisé pour fonctionner sans accroc sur les appareils du quotidien.' } ] },
    { id: 'ticoflow', kicker: 'TicoFlow', title: 'Une découverte qui coule de source.', body: 'TicoFlow est l’idée qui sous-tend la façon dont les contenus sont trouvés et présentés : un flux continu qui s’adapte à ce que vous aimez.' },
    { id: 'ticoguard', kicker: 'TicoGuard', title: 'Sécurité et confiance, dès la conception.', body: 'TicoGuard est notre approche pour garder la communauté en sécurité : des règles claires, des outils de signalement et le respect des personnes.' },
    { id: 'creators', kicker: 'Créateurs', title: 'Là où les créateurs commencent.', body: 'Des outils et un flux qui aident les nouvelles voix à se faire entendre et laissent aux créateurs la place de développer leur propre style.' },
    { id: 'social', kicker: 'Monde social', title: 'Quatre façons d’appartenir.', body: 'Tout sur TicoTico s’articule autour de quatre actions.', items: [
      { h: 'Découvrir', p: 'Trouvez des vidéos, des personnes et des idées.' }, { h: 'Créer', p: 'Transformez vos moments en vidéos.' },
      { h: 'Se connecter', p: 'Suivez, commentez et discutez.' }, { h: 'Partager', p: 'Envoyez vos favoris à vos amis, où qu’ils soient.' } ] },
    { id: 'cta', kicker: 'Rejoignez l’aventure', title: 'Faites partie de la suite.', body: 'TicoTico est en construction. Suivez son évolution.' },
  ],
}
export default fr
