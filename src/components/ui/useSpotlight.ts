import { useCallback } from 'react'

/**
 * Liefert einen Maus-Handler, der die Zeigerposition als CSS-Variablen
 * (--mx / --my) auf das Element schreibt. Zusammen mit der Klasse
 * "spotlight" (siehe index.css) folgt dadurch ein weicher Lichtschein
 * dem Mauszeiger über der Karte.
 */
export function useSpotlight() {
  return useCallback((event: React.MouseEvent<HTMLElement>) => {
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [])
}
