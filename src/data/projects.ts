import type { Project } from '../types'

const hostingNote =
  'Kostenlos gehostet: Bei Inaktivität schläft der Server ein, der erste Aufruf kann dann bis zu ca. 60 Sekunden dauern – danach läuft alles normal schnell.'

export const projects: Project[] = [
  {
    // Bewusst an erster Stelle: Diese Seite ist selbst ein Arbeitsbeispiel.
    // Kein liveUrl - man befindet sich ja bereits darauf.
    title: 'Portfolio-Website',
    description:
      'Diese Website. Single-Page-Anwendung mit React 19, TypeScript und Vite, gestaltet mit Tailwind CSS. Drei separate Seiten-Einstiegspunkte, Kontaktformular direkt aus dem Browser und eine Build-Pipeline, die bei jedem Push über GitHub Actions automatisch auf GitHub Pages veröffentlicht.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    githubUrl: 'https://github.com/hafner312/BewerbungsPortfolio',
    featured: true,
    highlight: 'Diese Website',
    icon: '🌐',
    gradient: 'from-[#0f766e] to-[#1e3a5c]',
    image: 'portfolio-website.webp',
    imageAlt: 'Startseite dieser Portfolio-Website mit Namenszug und Code-Karte',
    hostingNote:
      'Du siehst sie gerade: Der Quellcode dieser Seite liegt offen auf GitHub – vom ersten Entwurf bis zum automatischen Deployment.',
  },
  {
    title: 'Pflanzenlexikon',
    description:
      'Web-App zur Verwaltung von Pflanzendaten mit Java Spring Boot, MongoDB und einem eigenen Frontend zum Durchsuchen, Filtern und Bearbeiten des Pflanzenbestands. Die REST-API lässt sich zusätzlich über die interaktive Swagger-Oberfläche direkt ausprobieren.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/hafner312/Projektarbeit-Pflanzenlexikon',
    liveUrl: 'https://projektarbeit-pflanzenlexikon.onrender.com/',
    hostingNote,
    featured: true,
    label: 'Teamprojekt · Schule',
    icon: '🌿',
    gradient: 'from-[#0d9488] to-[#0f766e]',
    image: 'pflanzenlexikon.webp',
    imageAlt: 'Laptop mit der Pflanzenlexikon-Oberfläche, umgeben von Zimmerpflanzen',
  },
  {
    title: 'BookBuddy',
    description:
      'Fullstack-Anwendung zur Verwaltung von Büchern mit React/Vite-Frontend und Spring-Boot-Backend. Modulare Struktur für schnelles Prototyping und produktionsnahe Entwicklung.',
    tags: ['React', 'Vite', 'Spring Boot', 'Java'],
    githubUrl: 'https://github.com/hafner312/Book-Buddy',
    liveUrl: 'https://bookbuddy-frontend-o8mk.onrender.com',
    hostingNote,
    featured: true,
    icon: '📚',
    gradient: 'from-[#155e75] to-[#0d9488]',
    image: 'bookbuddy.webp',
    imageAlt: 'Bücherstapel mit Lesebrille und Kaffeetasse auf einem Schreibtisch',
  },
  {
    title: 'Einkaufsliste',
    description:
      'Ursprünglich als native Android-App mit Java entwickelt, zusätzlich als eigenständige Web-App mit Spring Boot umgesetzt: Artikel mit Menge, Einheit und Ort erfassen und beim Einkaufen abhaken.',
    tags: ['Java', 'Spring Boot', 'Android'],
    githubUrl: 'https://github.com/hafner312/Einkaufsliste',
    liveUrl: 'https://einkaufsliste-w6c7.onrender.com',
    hostingNote,
    featured: false,
    icon: '🛒',
    gradient: 'from-[#0d9488] to-[#0891b2]',
    image: 'einkaufsliste.webp',
    imageAlt: 'Einkaufstasche mit Lebensmitteln neben einem Notizblock mit Einkaufsliste',
  },
  {
    title: '4 Gewinnt',
    description:
      'Klassisches Vier-Gewinnt-Spiel als interaktive Web-App mit Blazor Server (C#/.NET). Der Spielzustand wird serverseitig verwaltet und live per SignalR an den Browser übertragen.',
    tags: ['C#', 'Blazor', '.NET', 'SignalR'],
    githubUrl: 'https://github.com/hafner312/ConnectFour',
    liveUrl: 'https://connectfour-lyue.onrender.com',
    hostingNote,
    featured: false,
    icon: '🎮',
    gradient: 'from-[#0e7490] to-[#0d9488]',
    image: 'vier-gewinnt.webp',
    imageAlt: 'Vier-Gewinnt-Spielbrett mit roten und gelben Steinen neben einem Controller',
  },
  {
    title: 'Contoso Pizza',
    description:
      'Web-Anwendung zur Pizzabestellung mit ASP.NET Core Razor Pages und Entity Framework Core. Verwaltung von Produkten und Bestellungen mit lokaler Datenbank.',
    tags: ['C#', 'ASP.NET Core', 'Razor Pages', 'Entity Framework'],
    githubUrl: 'https://github.com/hafner312/ContosoPizza',
    liveUrl: 'https://contosopizza-vkam.onrender.com',
    hostingNote,
    featured: false,
    icon: '🍕',
    gradient: 'from-[#0e7490] to-[#155e75]',
    image: 'contoso-pizza.webp',
    imageAlt: 'Pizza Margherita neben einem Tablet mit der Speisekarte der Bestell-App',
  },
]
