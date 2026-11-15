// Copy for the extra pages (TicoFlow, TicoGuard, Support, Contact), one block per language.
// A new language must add a block here too (TypeScript enforces it).
import type { Lang, Item } from './content'
import type { ActKey } from './Robot'

export type RAct = { key: ActKey; label: string; reply: string }
export type Pages = {
  nav: { home: string; flow: string; guard: string; support: string; contact: string }
  demo: string
  flow: { kicker: string; title: string; body: string; items: Item[] }
  guard: { kicker: string; title: string; body: string; items: Item[]; actions: RAct[] }
  support: { kicker: string; title: string; body: string; hint: string; actions: RAct[] }
  contact: { kicker: string; title: string; body: string }
}

const en: Pages = {
  nav: { home: 'Home', flow: 'TicoFlow', guard: 'TicoGuard', support: 'Support', contact: 'Contact' },
  demo: 'Demo robot',
  flow: { kicker: 'TicoFlow', title: 'Discovery that flows.', body: 'TicoFlow is how content is found and shown on TicoTico: a continuous stream designed to adapt to what you enjoy.', items: [
    { h: 'Endless vertical stream', p: 'Videos arrive one after another, full screen, with a single swipe.' },
    { h: 'Adapts to you', p: 'What you enjoy is meant to shape what appears next.' },
    { h: 'Room for new voices', p: 'Designed so new creators can be discovered, not only the biggest ones.' } ] },
  guard: { kicker: 'About TicoGuard', title: 'Safety and trust, by design.', body: 'TicoGuard is our approach to protecting the community. Meet the little robot standing guard: tap the buttons and watch it work.', items: [
    { h: 'Clear rules', p: 'Plain-language guidelines everyone can understand.' },
    { h: 'Reporting tools', p: 'Simple ways to flag content or accounts that cross the line.' },
    { h: 'Respect for people', p: 'A community built on kindness and dignity.' },
    { h: 'Safe from the start', p: 'Protection is planned in from day one, not added later.' } ],
    actions: [
      { key: 'wave', label: 'Say hi', reply: 'Hi! I’m Tico, and I keep watch.' },
      { key: 'scan', label: 'Run a safety scan', reply: 'Scan finished: all clear. (A visual demo only, not a real scan.)' },
      { key: 'spin', label: 'Show me around', reply: 'Here I am, keeping my eyes open.' } ] },
  support: { kicker: 'Support', title: 'Hi, I’m Tico. Need a hand?', body: 'Tico is a friendly helper robot. For now it is a live demo: pick something below and see how it reacts.', hint: 'Tap a button, or tap the robot', actions: [
    { key: 'wave', label: 'Say hi', reply: 'Hi! I’m Tico. Right now I’m a demo robot; real support arrives with the app.' },
    { key: 'jump', label: 'Cheer me up', reply: 'You’ve got this! Every great video starts with one small idea.' },
    { key: 'spin', label: 'Do a spin', reply: 'Wheee! Spinning is my favourite thing.' },
    { key: 'scan', label: 'How do I get help?', reply: 'TicoTico isn’t launched yet. Support channels will show up here when the app goes live.' } ] },
  contact: { kicker: 'Contact', title: 'Let’s stay in touch.', body: 'TicoTico is still being built and there is no public contact channel yet. Check back soon.' },
}

const de: Pages = {
  nav: { home: 'Start', flow: 'TicoFlow', guard: 'TicoGuard', support: 'Support', contact: 'Kontakt' },
  demo: 'Demo-Roboter',
  flow: { kicker: 'TicoFlow', title: 'Entdecken im Fluss.', body: 'TicoFlow bestimmt, wie Inhalte auf TicoTico gefunden und angezeigt werden: ein kontinuierlicher Strom, der sich an das anpasst, was dir gefällt.', items: [
    { h: 'Endloser vertikaler Strom', p: 'Videos erscheinen nacheinander im Vollbild, mit einem Wisch.' },
    { h: 'Passt sich dir an', p: 'Was dir gefällt, soll beeinflussen, was als Nächstes kommt.' },
    { h: 'Raum für neue Stimmen', p: 'So gestaltet, dass auch neue Creator entdeckt werden, nicht nur die größten.' } ] },
  guard: { kicker: 'Über TicoGuard', title: 'Sicherheit und Vertrauen von Grund auf.', body: 'TicoGuard ist unser Ansatz zum Schutz der Community. Lerne den kleinen Roboter kennen, der Wache hält: tippe auf die Buttons und schau ihm zu.', items: [
    { h: 'Klare Regeln', p: 'Verständliche Richtlinien für alle.' },
    { h: 'Meldefunktionen', p: 'Einfache Wege, Inhalte oder Konten zu melden, die Grenzen überschreiten.' },
    { h: 'Respekt für Menschen', p: 'Eine Community, die auf Freundlichkeit und Würde baut.' },
    { h: 'Sicher von Anfang an', p: 'Schutz wird von Beginn an eingeplant, nicht nachträglich ergänzt.' } ],
    actions: [
      { key: 'wave', label: 'Hallo sagen', reply: 'Hallo! Ich bin Tico und halte Wache.' },
      { key: 'scan', label: 'Sicherheits-Scan starten', reply: 'Scan beendet: alles in Ordnung. (Nur eine visuelle Demo, kein echter Scan.)' },
      { key: 'spin', label: 'Zeig dich mal', reply: 'Hier bin ich und halte die Augen offen.' } ] },
  support: { kicker: 'Support', title: 'Hi, ich bin Tico. Brauchst du Hilfe?', body: 'Tico ist ein freundlicher Helfer-Roboter. Aktuell ist er eine Live-Demo: wähl unten etwas aus und sieh, wie er reagiert.', hint: 'Tippe auf einen Button oder auf den Roboter', actions: [
    { key: 'wave', label: 'Hallo sagen', reply: 'Hi! Ich bin Tico. Im Moment bin ich ein Demo-Roboter; echter Support kommt mit der App.' },
    { key: 'jump', label: 'Muntere mich auf', reply: 'Du schaffst das! Jedes tolle Video beginnt mit einer kleinen Idee.' },
    { key: 'spin', label: 'Dreh dich', reply: 'Wuiii! Drehen ist mein Lieblingsding.' },
    { key: 'scan', label: 'Wie bekomme ich Hilfe?', reply: 'TicoTico ist noch nicht gestartet. Support-Kanäle erscheinen hier, sobald die App live ist.' } ] },
  contact: { kicker: 'Kontakt', title: 'Bleiben wir in Verbindung.', body: 'TicoTico befindet sich noch im Aufbau, einen öffentlichen Kontaktkanal gibt es noch nicht. Schau bald wieder vorbei.' },
}

const fr: Pages = {
  nav: { home: 'Accueil', flow: 'TicoFlow', guard: 'TicoGuard', support: 'Assistance', contact: 'Contact' },
  demo: 'Robot de démo',
  flow: { kicker: 'TicoFlow', title: 'Une découverte qui coule de source.', body: 'TicoFlow décide de la façon dont les contenus sont trouvés et présentés sur TicoTico : un flux continu conçu pour s’adapter à ce que vous aimez.', items: [
    { h: 'Flux vertical sans fin', p: 'Les vidéos s’enchaînent en plein écran, d’un simple balayage.' },
    { h: 'S’adapte à vous', p: 'Ce que vous aimez est censé influencer la suite.' },
    { h: 'De la place pour les nouvelles voix', p: 'Conçu pour que les nouveaux créateurs soient découverts, pas seulement les plus grands.' } ] },
  guard: { kicker: 'À propos de TicoGuard', title: 'Sécurité et confiance, dès la conception.', body: 'TicoGuard est notre approche pour protéger la communauté. Faites connaissance avec le petit robot qui monte la garde : touchez les boutons et regardez-le agir.', items: [
    { h: 'Des règles claires', p: 'Des consignes en langage simple, compréhensibles par tous.' },
    { h: 'Outils de signalement', p: 'Des moyens simples de signaler les contenus ou comptes qui dépassent les limites.' },
    { h: 'Respect des personnes', p: 'Une communauté fondée sur la bienveillance et la dignité.' },
    { h: 'Sûr dès le départ', p: 'La protection est prévue dès le début, pas ajoutée après coup.' } ],
    actions: [
      { key: 'wave', label: 'Dire bonjour', reply: 'Bonjour ! Je suis Tico et je monte la garde.' },
      { key: 'scan', label: 'Lancer une analyse', reply: 'Analyse terminée : tout est en ordre. (Simple démo visuelle, pas une vraie analyse.)' },
      { key: 'spin', label: 'Fais-moi visiter', reply: 'Me voici, l’œil ouvert.' } ] },
  support: { kicker: 'Assistance', title: 'Salut, je suis Tico. Besoin d’un coup de main ?', body: 'Tico est un robot assistant plein d’amitié. Pour l’instant, c’est une démo en direct : choisissez une option et voyez sa réaction.', hint: 'Touchez un bouton ou le robot', actions: [
    { key: 'wave', label: 'Dire bonjour', reply: 'Salut ! Je suis Tico. Pour l’instant, je suis un robot de démonstration ; la vraie assistance arrivera avec l’app.' },
    { key: 'jump', label: 'Remonte-moi le moral', reply: 'Tu vas y arriver ! Toute belle vidéo commence par une petite idée.' },
    { key: 'spin', label: 'Fais un tour', reply: 'Wouiii ! Tourner, c’est mon truc préféré.' },
    { key: 'scan', label: 'Comment obtenir de l’aide ?', reply: 'TicoTico n’est pas encore lancé. Les canaux d’assistance apparaîtront ici à la sortie de l’app.' } ] },
  contact: { kicker: 'Contact', title: 'Gardons le contact.', body: 'TicoTico est encore en construction et il n’existe pas encore de canal de contact public. Revenez bientôt.' },
}

const es: Pages = {
  nav: { home: 'Inicio', flow: 'TicoFlow', guard: 'TicoGuard', support: 'Soporte', contact: 'Contacto' },
  demo: 'Robot de demostración',
  flow: { kicker: 'TicoFlow', title: 'Un descubrimiento que fluye.', body: 'TicoFlow define cómo se encuentra y se muestra el contenido en TicoTico: un flujo continuo pensado para adaptarse a lo que disfrutas.', items: [
    { h: 'Flujo vertical sin fin', p: 'Los vídeos llegan uno tras otro, a pantalla completa, con un solo gesto.' },
    { h: 'Se adapta a ti', p: 'Lo que disfrutas debe influir en lo que aparece después.' },
    { h: 'Espacio para voces nuevas', p: 'Pensado para que se descubra a nuevos creadores, no solo a los más grandes.' } ] },
  guard: { kicker: 'Acerca de TicoGuard', title: 'Seguridad y confianza desde el diseño.', body: 'TicoGuard es nuestro enfoque para proteger a la comunidad. Conoce al pequeño robot que hace guardia: toca los botones y míralo en acción.', items: [
    { h: 'Reglas claras', p: 'Normas en lenguaje sencillo que todos pueden entender.' },
    { h: 'Herramientas de denuncia', p: 'Formas simples de señalar contenidos o cuentas que cruzan el límite.' },
    { h: 'Respeto por las personas', p: 'Una comunidad construida sobre la amabilidad y la dignidad.' },
    { h: 'Seguro desde el inicio', p: 'La protección se planifica desde el principio, no se añade después.' } ],
    actions: [
      { key: 'wave', label: 'Saludar', reply: '¡Hola! Soy Tico y hago guardia.' },
      { key: 'scan', label: 'Iniciar análisis de seguridad', reply: 'Análisis terminado: todo en orden. (Es solo una demo visual, no un análisis real.)' },
      { key: 'spin', label: 'Enséñame', reply: 'Aquí estoy, atento a todo.' } ] },
  support: { kicker: 'Soporte', title: 'Hola, soy Tico. ¿Necesitas ayuda?', body: 'Tico es un robot ayudante muy amable. Por ahora es una demo en vivo: elige algo abajo y mira cómo reacciona.', hint: 'Toca un botón o toca el robot', actions: [
    { key: 'wave', label: 'Saludar', reply: '¡Hola! Soy Tico. Ahora mismo soy un robot de demostración; el soporte real llegará con la app.' },
    { key: 'jump', label: 'Anímame', reply: '¡Tú puedes! Todo gran vídeo empieza con una pequeña idea.' },
    { key: 'spin', label: 'Da una vuelta', reply: '¡Wiii! Girar es lo que más me gusta.' },
    { key: 'scan', label: '¿Cómo consigo ayuda?', reply: 'TicoTico aún no se ha lanzado. Los canales de soporte aparecerán aquí cuando la app esté disponible.' } ] },
  contact: { kicker: 'Contacto', title: 'Mantengámonos en contacto.', body: 'TicoTico sigue en construcción y todavía no hay un canal de contacto público. Vuelve pronto.' },
}

const ar: Pages = {
  nav: { home: 'الرئيسية', flow: 'TicoFlow', guard: 'TicoGuard', support: 'الدعم', contact: 'تواصل معنا' },
  demo: 'روبوت تجريبي',
  flow: { kicker: 'TicoFlow', title: 'اكتشاف يتدفّق.', body: 'TicoFlow هو ما يحدد طريقة العثور على المحتوى وعرضه في TicoTico: تدفّق مستمر صُمّم ليتكيّف مع ما تستمتع به.', items: [
    { h: 'تدفّق عمودي لا ينتهي', p: 'تتوالى الفيديوهات بملء الشاشة بسحبة واحدة.' },
    { h: 'يتكيّف معك', p: 'ما تستمتع به يُفترض أن يؤثر في ما يظهر بعده.' },
    { h: 'مساحة للأصوات الجديدة', p: 'مصمَّم ليُكتشف المبدعون الجدد، لا الأكبر فقط.' } ] },
  guard: { kicker: 'عن TicoGuard', title: 'الأمان والثقة بالتصميم.', body: 'TicoGuard هو نهجنا لحماية المجتمع. تعرّف على الروبوت الصغير الذي يقف حارساً: اضغط الأزرار وشاهده وهو يعمل.', items: [
    { h: 'قواعد واضحة', p: 'إرشادات بلغة بسيطة يفهمها الجميع.' },
    { h: 'أدوات الإبلاغ', p: 'طرق سهلة للإبلاغ عن المحتوى أو الحسابات التي تتجاوز الحدود.' },
    { h: 'احترام للناس', p: 'مجتمع قائم على اللطف والكرامة.' },
    { h: 'آمن منذ البداية', p: 'تُخطَّط الحماية منذ البداية ولا تُضاف لاحقاً.' } ],
    actions: [
      { key: 'wave', label: 'قل مرحباً', reply: 'مرحباً! أنا تيكو وأقوم بالحراسة.' },
      { key: 'scan', label: 'ابدأ فحص الأمان', reply: 'انتهى الفحص: كل شيء سليم. (هذا عرض مرئي تجريبي وليس فحصاً حقيقياً.)' },
      { key: 'spin', label: 'أرِني نفسك', reply: 'ها أنا ذا، أراقب كل شيء.' } ] },
  support: { kicker: 'الدعم', title: 'مرحباً، أنا تيكو. هل تحتاج إلى مساعدة؟', body: 'تيكو روبوت مساعد ودود. حالياً هو عرض حي تجريبي: اختر شيئاً من الأسفل وشاهد كيف يتفاعل.', hint: 'اضغط زراً أو اضغط الروبوت', actions: [
    { key: 'wave', label: 'قل مرحباً', reply: 'مرحباً! أنا تيكو. أنا الآن روبوت تجريبي، والدعم الحقيقي سيأتي مع التطبيق.' },
    { key: 'jump', label: 'شجّعني', reply: 'أنت قادر! كل فيديو رائع يبدأ بفكرة صغيرة.' },
    { key: 'spin', label: 'ادُر دورة', reply: 'هيييه! الدوران هو أكثر ما أحب.' },
    { key: 'scan', label: 'كيف أحصل على مساعدة؟', reply: 'TicoTico لم يُطلق بعد. ستظهر قنوات الدعم هنا عند إطلاق التطبيق.' } ] },
  contact: { kicker: 'تواصل معنا', title: 'لنبقَ على تواصل.', body: 'TicoTico ما زال قيد الإنشاء ولا توجد قناة تواصل عامة بعد. عُد قريباً.' },
}

const fa: Pages = {
  nav: { home: 'خانه', flow: 'TicoFlow', guard: 'TicoGuard', support: 'پشتیبانی', contact: 'تماس' },
  demo: 'ربات نمایشی',
  flow: { kicker: 'TicoFlow', title: 'کشفی که جاری می‌شود.', body: 'TicoFlow تعیین می‌کند محتوا در TicoTico چطور پیدا و نمایش داده شود: جریانی پیوسته که طوری طراحی شده با سلیقه‌ی تو سازگار شود.', items: [
    { h: 'جریان عمودی بی‌پایان', p: 'ویدیوها تمام‌صفحه و پشت سر هم، فقط با یک کشیدن انگشت می‌آیند.' },
    { h: 'سازگار با تو', p: 'قرار است آنچه دوست داری روی چیزی که بعد می‌آید اثر بگذارد.' },
    { h: 'جا برای صداهای تازه', p: 'طوری طراحی شده که سازندگان تازه‌کار هم دیده شوند، نه فقط بزرگ‌ترین‌ها.' } ] },
  guard: { kicker: 'درباره‌ی TicoGuard', title: 'امنیت و اعتماد، از همان طراحی.', body: 'TicoGuard رویکرد ما برای محافظت از جامعه است. با ربات کوچولویی که نگهبانی می‌دهد آشنا شو: دکمه‌ها را بزن و کارش را ببین.', items: [
    { h: 'قوانین روشن', p: 'راهنمایی‌هایی به زبان ساده که همه بفهمند.' },
    { h: 'ابزارهای گزارش‌دهی', p: 'راه‌های ساده برای گزارش محتوا یا حساب‌هایی که از حد می‌گذرند.' },
    { h: 'احترام به آدم‌ها', p: 'جامعه‌ای بر پایه‌ی مهربانی و کرامت.' },
    { h: 'از ابتدا امن', p: 'محافظت از همان اول برنامه‌ریزی می‌شود، نه بعداً اضافه.' } ],
    actions: [
      { key: 'wave', label: 'سلام بده', reply: 'سلام! من تیکو هستم و نگهبانی می‌دهم.' },
      { key: 'scan', label: 'اسکن امنیتی بزن', reply: 'اسکن تمام شد: همه‌چیز مرتب است. (این فقط یک نمایش تصویری است، نه اسکن واقعی.)' },
      { key: 'spin', label: 'خودت را نشان بده', reply: 'من اینجام و حواسم به همه‌چیز هست.' } ] },
  support: { kicker: 'پشتیبانی', title: 'سلام، من تیکو هستم. کمک می‌خوای؟', body: 'تیکو یک ربات کمک‌کننده‌ی مهربان است. فعلاً یک دموی زنده است: یکی از گزینه‌های پایین را بزن و واکنشش را ببین.', hint: 'روی یک دکمه یا روی ربات بزن', actions: [
    { key: 'wave', label: 'سلام بده', reply: 'سلام! من تیکو هستم. فعلاً یک ربات نمایشی‌ام و پشتیبانی واقعی همراه اپ می‌آید.' },
    { key: 'jump', label: 'دلم را شاد کن', reply: 'تو از پسش برمی‌آیی! هر ویدیوی خوب با یک ایده‌ی کوچک شروع می‌شود.' },
    { key: 'spin', label: 'یه چرخ بزن', reply: 'هوووو! چرخیدن چیز مورد علاقه‌ی منه.' },
    { key: 'scan', label: 'چطور کمک بگیرم؟', reply: 'TicoTico هنوز عرضه نشده. وقتی اپ بیاید، راه‌های پشتیبانی اینجا نمایش داده می‌شود.' } ] },
  contact: { kicker: 'تماس', title: 'در تماس بمانیم.', body: 'TicoTico هنوز در حال ساخت است و فعلاً راه ارتباطی عمومی وجود ندارد. به‌زودی دوباره سر بزن.' },
}

export const pages: Record<Lang, Pages> = { en, de, fr, es, ar, fa }
