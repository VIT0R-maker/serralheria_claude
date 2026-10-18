import { useEffect, useRef } from 'react'
import { Icon } from './Icon'
import { projects } from './data'

// <dialog> nativo: foco contido, Escape e fundo inerte já vêm do navegador.
export function Lightbox({ i, set }: { i: number | null; set: (n: number | null) => void }) {
  const d = useRef<HTMLDialogElement>(null)
  const from = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const el = d.current
    if (el && i !== null && !el.open) {
      from.current = document.activeElement as HTMLElement
      el.showModal()
      document.body.classList.add('lock')
    }
  }, [i])
  const n = projects.length
  const go = (s: number) => i !== null && set((i + s + n) % n)
  const p = i === null ? null : projects[i]
  return (
    <dialog ref={d} className="lb" aria-labelledby="lb-t"
      onClose={() => { document.body.classList.remove('lock'); set(null); from.current?.focus() }}
      onClick={(e) => { if (e.target === d.current) d.current?.close() }}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1) }}>
      {p && <>
        <button className="lb-x" onClick={() => d.current?.close()} aria-label="Fechar"><Icon n="x" s={24} /></button>
        <img src={p.src} width={p.w} height={p.h} alt={p.alt} />
        <div className="lb-b">
          <div><h2 id="lb-t">{p.t}</h2><p>{p.d}</p></div>
          <div className="lb-n">
            <button onClick={() => go(-1)} aria-label="Projeto anterior"><Icon n="prev" s={24} /></button>
            <span aria-live="polite">{(i ?? 0) + 1} / {n}</span>
            <button onClick={() => go(1)} aria-label="Próximo projeto"><Icon n="next" s={24} /></button>
          </div>
        </div>
      </>}
    </dialog>
  )
}
