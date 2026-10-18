const P: Record<string, string> = {
  portao: 'M7 10h34v28H7zM14 10v28M21 10v28M28 10v28M35 10v28',
  porta: 'M14 5h20v38H14zM28 25h.01',
  guarda: 'M8 40V26M16 40V23M24 40V20M32 40V17M40 40V14M6 27L42 12M6 40h36',
  cobertura: 'M6 18h24l12-7H18zM6 18v24M30 18v24M42 11v24',
  escada: 'M6 42v-6h8v-8h8v-8h8v-8h8M6 36h8',
  pecas: 'M6 18h36M10 18v22M38 18v22M6 18l5-7h26l5 7',
  frame: 'M10 10h28v28H10zM6 6h8v8H6zM34 6h8v8h-8zM6 34h8v8H6zM34 34h8v8h-8z',
  shield: 'M24 5l16 6v12c0 10-7 17-16 20C15 40 8 33 8 23V11z',
  cube: 'M24 5l16 9v20l-16 9-16-9V14zM8 14l16 9 16-9M24 23v20',
  chat: 'M24 7C14 7 7 13 7 20c0 4 2 8 5 10l-2 9 9-4c2 .6 3 .8 5 .8 10 0 17-6 17-14S34 7 24 7z',
  pin: 'M24 43S10 29 10 19a14 14 0 0 1 28 0c0 10-14 24-14 24zM24 14a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',
  wa: 'M24 5a19 19 0 0 0-16 29l-3 9 9-3A19 19 0 1 0 24 5zM17 15c-1.500 2-1 6 3 11s8 6 11 5l1-3-4-2-2 2c-2-1-4-3-5-5l2-2-2-4z',
  arrow: 'M8 24h30M27 12l12 12-12 12',
  check: 'M24 6a18 18 0 1 0 0 36 18 18 0 0 0 0-36zM15 25l6 6 12-13',
  zoom: 'M20 34a14 14 0 1 0 0-28 14 14 0 0 0 0 28zM30 30l12 12M14 20h12M20 14v12',
  x: 'M12 12l24 24M36 12L12 36',
  menu: 'M8 14h32M8 24h32M8 34h32',
  prev: 'M30 10L16 24l14 14',
  next: 'M18 10l14 14-14 14',
}
export const Icon = ({ n, s = 44 }: { n: string; s?: number }) => (
  <svg viewBox="0 0 48 48" width={s} height={s} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={P[n]} /></svg>
)
export const Logo = ({ light = false }: { light?: boolean }) => (
  <svg viewBox="0 0 56 56" width={56} height={56} fill="none" aria-hidden="true" focusable="false">
    <path d="M8 38V16l20-8h16v10" stroke="#B94E2D" strokeWidth={5} />
    <path d="M48 18v22L28 48H12V40" stroke={light ? '#F4F2ED' : '#202522'} strokeWidth={5} />
    <path d="M22 22h14v14H22z" stroke={light ? '#F4F2ED' : '#202522'} strokeWidth={3} />
  </svg>
)
