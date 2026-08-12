import type { Project } from '../types'

const hostingNote =
  'Kostenlos gehostet: Bei Inaktivität schläft der Server ein, der erste Aufruf kann dann bis zu ca. 60 Sekunden dauern – danach läuft alles normal schnell.'

export const projects: Project[] = [
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
    icon: '🌿',
    gradient: 'from-[#0d9488] to-[#0f766e]',
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
  },
]
