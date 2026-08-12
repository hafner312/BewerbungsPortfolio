import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'BookBuddy',
    description:
      'Fullstack-Anwendung zur Verwaltung von Büchern mit React/Vite-Frontend und Spring-Boot-Backend. Modulare Struktur für schnelles Prototyping und produktionsnahe Entwicklung.',
    tags: ['React', 'Vite', 'Spring Boot', 'Java'],
    githubUrl: 'https://github.com/hafner312/book-buddy',
    featured: true,
    icon: '📚',
    gradient: 'from-[#155e75] to-[#0d9488]',
  },
  {
    title: 'Einkaufsliste',
    description:
      'Native Android-App zur Verwaltung von Einkaufslisten, entwickelt mit Java und Android Studio. Eine einfache und übersichtliche Anwendung mit sauberem Code.',
    tags: ['Android', 'Java'],
    githubUrl: 'https://github.com/hafner312/Einkaufsliste',
    featured: false,
    icon: '🛒',
    gradient: 'from-[#0d9488] to-[#0891b2]',
  },
  {
    title: 'Pflanzenlexikon',
    description:
      'Web-App mit Java Spring Boot Backend und MongoDB-Datenbank. Enthält vollständige Backend-Logik zur Verwaltung von Pflanzendaten.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/hafner312/Projektarbeit-Pflanzenlexikon',
    featured: true,
    icon: '🌿',
    gradient: 'from-[#0d9488] to-[#0f766e]',
  },
  {
    title: '4 Gewinnt',
    description:
      'Klassisches Vier-Gewinnt-Spiel als Browser-App. Die Spiellogik wurde vollständig mit CSS und JavaScript umgesetzt.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/hafner312/ConnectFour',
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
    featured: false,
    icon: '🍕',
    gradient: 'from-[#0e7490] to-[#155e75]',
  },
]
