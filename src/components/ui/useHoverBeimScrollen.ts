import { useEffect, useState } from 'react'

/**
 * Browser aktualisieren den :hover-Zustand beim Scrollen nicht, solange die
 * Maus stillsteht. Wer mit dem Zeiger ueber den Projekten scrollt, sieht die
 * Demo-Einblendung deshalb erst, wenn er die Maus bewegt.
 *
 * Der Hook merkt sich die letzte Zeigerposition und ermittelt beim Scrollen,
 * welches Element mit dem angegebenen Datenattribut gerade darunter liegt.
 *
 * @param attribut Datenattribut, das die Elemente kennzeichnet (z. B. 'data-projekt')
 * @returns Wert des Attributs des aktuell ueberfahrenen Elements, sonst null
 */
export function useHoverBeimScrollen(attribut: string): string | null {
  const [aktiv, setAktiv] = useState<string | null>(null)

  useEffect(() => {
    // Bewusst ohne Media-Query-Wache: die Listener sind guenstig, und auf
    // Touch-Geraeten gibt es schlicht keine Zeigerbewegung, die sie ausloest.
    let x = -1
    let y = -1
    let zuletzt = 0

    const merken = (e: PointerEvent | MouseEvent) => {
      x = e.clientX
      y = e.clientY
    }

    // Zeitliche Drosselung statt requestAnimationFrame: rAF ruht in nicht
    // gezeichneten Tabs, und elementFromPoint ist guenstig genug.
    const pruefen = () => {
      if (x < 0) return
      const jetzt = Date.now()
      if (jetzt - zuletzt < 80) return
      zuletzt = jetzt

      const unterZeiger = document.elementFromPoint(x, y)
      const karte = unterZeiger?.closest(`[${attribut}]`)
      setAktiv(karte ? karte.getAttribute(attribut) : null)
    }

    window.addEventListener('pointermove', merken, { passive: true })
    window.addEventListener('mousemove', merken, { passive: true })
    window.addEventListener('scroll', pruefen, { passive: true })
    return () => {
      window.removeEventListener('pointermove', merken)
      window.removeEventListener('mousemove', merken)
      window.removeEventListener('scroll', pruefen)
    }
  }, [attribut])

  return aktiv
}
