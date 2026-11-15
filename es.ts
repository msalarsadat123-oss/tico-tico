import type { Locale } from '../types'
const es: Locale = {
  name: 'Español', dir: 'ltr',
  ui: { comingSoon: 'Próximamente', menu: 'Menú', language: 'Idioma' },
  sections: [
    { id: 'hero', kicker: 'TicoTico', title: 'Vídeos cortos, creados para todo el mundo.', body: 'Una plataforma de vídeos cortos de alcance global, diseñada primero para Android. Descubre, crea, conecta y comparte.' },
    { id: 'about', kicker: 'Acerca de', title: 'Un nuevo hogar para las historias cortas.', body: 'TicoTico es una app de vídeos cortos hecha para personas de todo el mundo, empezando por donde ya está la mayoría: Android.' },
    { id: 'features', kicker: 'Funciones', title: 'Hecho para sentirse sencillo.', body: 'El corazón de la experiencia, en cuatro ideas.', items: [
      { h: 'Feed vertical', p: 'Una forma de ver a pantalla completa, pensada para deslizar.' },
      { h: 'Herramientas para creadores', p: 'Graba, edita y publica desde un solo lugar.' },
      { h: 'Global desde el inicio', p: 'Diseñado para muchos idiomas y regiones desde el primer día.' },
      { h: 'Rápido en cualquier móvil', p: 'Optimizado para funcionar con fluidez en dispositivos de uso diario.' } ] },
    { id: 'ticoflow', kicker: 'TicoFlow', title: 'Un descubrimiento que fluye.', body: 'TicoFlow es la idea detrás de cómo se encuentra y se muestra el contenido: un flujo continuo que se adapta a lo que disfrutas.' },
    { id: 'ticoguard', kicker: 'TicoGuard', title: 'Seguridad y confianza desde el diseño.', body: 'TicoGuard es nuestro enfoque para mantener segura a la comunidad: reglas claras, herramientas de denuncia y respeto por las personas.' },
    { id: 'creators', kicker: 'Creadores', title: 'Donde empiezan los creadores.', body: 'Herramientas y un feed que ayudan a que las voces nuevas se vean y dan a los creadores espacio para desarrollar su propio estilo.' },
    { id: 'social', kicker: 'Mundo social', title: 'Cuatro formas de pertenecer.', body: 'Todo en TicoTico se conecta a través de cuatro acciones.', items: [
      { h: 'Descubrir', p: 'Encuentra vídeos, personas e ideas.' }, { h: 'Crear', p: 'Convierte momentos en vídeos.' },
      { h: 'Conectar', p: 'Sigue, comenta y chatea.' }, { h: 'Compartir', p: 'Envía tus favoritos a amigos en cualquier lugar.' } ] },
    { id: 'cta', kicker: 'Súmate al viaje', title: 'Sé parte de lo que viene.', body: 'TicoTico está en construcción. Sigue de cerca cómo va tomando forma.' },
  ],
}
export default es
