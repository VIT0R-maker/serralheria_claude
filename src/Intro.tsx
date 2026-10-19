import { useEffect, useRef, useState } from 'react'
import mp4 from './assets/intro.mp4'
import webm from './assets/intro.webm'
import poster from './assets/intro-poster.webp'

/** A introdução não roda com movimento reduzido nem com economia de dados. */
export function shouldPlayIntro() {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !saveData
}

export function Intro({ onDone }: { onDone: () => void }) {
  const v = useRef<HTMLVideoElement>(null)
  const skip = useRef<HTMLButtonElement>(null)
  const [out, setOut] = useState(false)

  useEffect(() => {
    document.body.classList.add('lock')
    skip.current?.focus()
    const end = () => setOut(true)
    const failsafe = setTimeout(end, 7000) // nunca prende o visitante se o vídeo não rodar
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') end() }
    document.addEventListener('keydown', key)
    v.current?.play().catch(end)
    v.current?.addEventListener('ended', end)
    return () => { clearTimeout(failsafe); document.removeEventListener('keydown', key); document.body.classList.remove('lock') }
  }, [])

  useEffect(() => {
    if (!out) return
    const t = setTimeout(onDone, 450)
    return () => clearTimeout(t)
  }, [out, onDone])

  return (
    <div className={out ? 'intro out' : 'intro'} role="presentation">
      <video ref={v} muted playsInline preload="auto" poster={poster} aria-hidden="true" tabIndex={-1} disablePictureInPicture>
        <source src={mp4} type="video/mp4" />
        <source src={webm} type="video/webm" onError={() => setOut(true)} />
      </video>
      <button ref={skip} type="button" className="intro-skip" onClick={() => setOut(true)}>Pular introdução</button>
    </div>
  )
}
