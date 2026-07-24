import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Pflanzenlexikon',
    description:
      'Web-App mit Java Spring Boot Backend und MongoDB-Datenbank. Enthält vollständige Backend-Logik zur Verwaltung von Pflanzendaten.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/hafner312/Projektarbeit-Pflanzenlexikon',
    featured: true,
    icon: '\uD83C\uDF3F',
    gradient: 'from-[#0d9488] to-[#0f766e]',
  },
  {
    title: 'Quiz Frontend',
    description:
      'Interaktive Quiz-Applikation im Browser, entwickelt mit JavaScript. Die Anwendung bietet eine benutzerfreundliche Oberfläche mit dynamischen Fragen und Auswertung.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/hafner312/mein-quiz-frontend',
    featured: true,
    icon: '\uD83E\uDDE0',
    gradient: 'from-[#0d9488] to-[#1e293b]',
  },
  {
    title: 'Connect Four',
    description:
      'Klassisches Vier-Gewinnt-Spiel als Browser-App. Die Spiellogik wurde vollständig mit CSS und JavaScript umgesetzt.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/hafner312/ConnectFour',
    featured: false,
    icon: '\uD83C\uDFAE',
    gradient: 'from-[#0e7490] to-[#0d9488]',
  },
  {
    title: 'Schulnotizen Teamprojekt',
    description:
      'Java-Teamprojekt zur Verwaltung von Schulnotizen. Entwickelt im Team mit Fokus auf strukturierter Zusammenarbeit und verständlichem Code.',
    tags: ['Java'],
    githubUrl: 'https://github.com/hafner312/lern-schulnotizen-teamprojekt',
    featured: false,
    icon: '\uD83D\uDCD3',
    gradient: 'from-[#155e75] to-[#0d9488]',
  },
  {
    title: 'Blazor Web App',
    description:
      'Web-Applikation mit Microsoft Blazor und C#. Das Projekt zeigt den Einsatz von .NET-Technologien in moderner Webentwicklung.',
    tags: ['Blazor', 'C#', '.NET'],
    githubUrl: 'https://github.com/hafner312/BlazorApp',
    featured: false,
    icon: '\u26A1',
    gradient: 'from-[#1e293b] to-[#0f766e]',
  },
  {
    title: 'Einkaufsliste',
    description:
      'Java-App zur Verwaltung von Einkaufslisten. Eine einfache und übersichtliche Anwendung mit sauberem Java-Code.',
    tags: ['Java'],
    githubUrl: 'https://github.com/hafner312/Einkaufsliste',
    featured: false,
    icon: '\uD83D\uDED2',
    gradient: 'from-[#0d9488] to-[#0891b2]',
  },
]
