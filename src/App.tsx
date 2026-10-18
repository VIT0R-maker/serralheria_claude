import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import { Icon, Logo } from './Icon'
import { Contact } from './Contact'
import { Lightbox } from './Lightbox'
import { benefits, nav, projects, quotes, services, steps } from './data'
import hero from './assets/hero.webp'
import about from './assets/about.webp'

const z = (v: number) => ({ '--z': v }) as CSSProperties
const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

function Head({ eb, id, lines, lead }: { eb: string; id: string; lines: string[]; lead?: ReactNode }) {
  return (
    <div className="head rv">
      <p className="eb">{eb}</p>
      <h2 id={id}>{lines.map((l, i) => <span key={l}>{l}{i < lines.length - 1 && <br />}</span>)}<span className="cu">.</span></h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-btn')?.focus() } }
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [open])
  const close = () => setOpen(false)
  return (
    <header className="hd">
      <div className="wrap hd-in">
        <a href="#top" className="logo" aria-label="FERRO & FORMA — Serralheria sob medida, início"><Logo /><span><b>FERRO &amp; FORMA</b><small>Serralheria sob medida</small></span></a>
        <button id="menu-btn" className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}><span className="sr">Menu</span><Icon n={open ? 'x' : 'menu'} s={26} /></button>
        <nav id="nav" aria-label="Principal" className={open ? 'nav open' : 'nav'}>
          {nav.map(([h, t]) => <a key={h} href={h} onClick={close}>{t}</a>)}
          <a className="btn" href="#contato" onClick={close}>Pedir orçamento</a>
        </nav>
      </div>
    </header>
  )
}

const Hero = () => (
  <section className="hero" aria-labelledby="h1">
    <div className="hero-tx">
      <p className="eb">Precisão em cada detalhe</p>
      <h1 id="h1">Força na estrutura. <span className="cu">Elegância</span> no acabamento.</h1>
      <p className="lead">Portões, estruturas e soluções em metal feitas sob medida para valorizar seu espaço.</p>
      <div className="cta">
        <a className="btn btn-lg" href="#contato"><Icon n="wa" s={26} />Solicitar orçamento</a>
        <a className="lnk" href="#projetos">Conhecer os projetos <Icon n="arrow" s={20} /></a>
      </div>
      <p className="micro">Conte sua ideia e envie fotos ou medidas do local.</p>
    </div>
    <figure className="hero-ph zm" style={z(1.03)}>
      <img src={hero} width={780} height={756} fetchPriority="high" alt="Fachada contemporânea com portão ripado preto de metal" />
      <figcaption className="hcap"><strong>Portões sob medida</strong><span>Soluções que integram proteção e arquitetura</span></figcaption>
    </figure>
  </section>
)

const Benefits = () => (
  <section className="ben" aria-label="Diferenciais">
    <ul className="wrap ben-g">{benefits.map((b) => <li key={b.t}><span className="cu"><Icon n={b.i} s={48} /></span><p><strong>{b.t}</strong>{b.d}</p></li>)}</ul>
  </section>
)

function Services({ onPick }: { onPick: (t: string) => void }) {
  return (
    <section id="servicos" className="sec" aria-labelledby="t-sv">
      <div className="wrap">
        <Head eb="O que fazemos" id="t-sv" lines={['Soluções em metal para o seu projeto']} lead="Da proteção da fachada aos detalhes que transformam o ambiente." />
        <ul className="svc-g">{services.map((s, i) => (
          <li key={s.t} className="rv" style={d((i % 3) * 70)}>
            <article className="svc">
              <span className="cu"><Icon n={s.i} s={60} /></span>
              <div>
                <h3><button type="button" onClick={() => onPick(s.t)}>{s.t}</button></h3>
                <p>{s.d}</p>
                <span className="arr"><Icon n="arrow" s={22} /></span>
              </div>
            </article>
          </li>))}
        </ul>
      </div>
    </section>
  )
}

const About = () => (
  <section id="sobre" className="sec dk" aria-labelledby="t-sb">
    <div className="wrap about-g">
      <figure className="zm ph rv" style={z(1.03)}><img src={about} width={751} height={357} loading="lazy" alt="Profissional medindo uma peça metálica sobre a bancada da oficina" /></figure>
      <div className="rv">
        <p className="eb">Nossa essência</p>
        <h2 id="t-sb">Seu projeto merece cuidado em cada etapa<span className="cu">.</span></h2>
        <p className="lead">Unimos escuta, planejamento e execução para criar soluções em metal que façam sentido para o seu espaço.</p>
        <ul className="chk">{['Entendimento da sua necessidade.', 'Definição de materiais e acabamentos.', 'Atenção à fabricação e à instalação.'].map((t) => <li key={t}><span className="cu"><Icon n="check" s={26} /></span>{t}</li>)}</ul>
        <a className="lnk lg" href="#contato">Conversar sobre meu projeto <Icon n="arrow" s={22} /></a>
      </div>
    </div>
  </section>
)

function Gallery({ open }: { open: (i: number) => void }) {
  return (
    <section id="projetos" className="sec dk" aria-labelledby="t-pj">
      <div className="wrap">
        <div className="pj-h">
          <Head eb="Projetos & possibilidades" id="t-pj" lines={['O metal ganha forma.', 'O espaço ganha identidade']} lead="Referências de aplicações, desenhos e acabamentos para inspirar o seu projeto." />
          <p className="note">Imagens ilustrativas do site demonstrativo.</p>
        </div>
        <ul className="pj-g">{projects.map((p, i) => (
          <li key={p.t} className="rv" style={d((i % 2) * 80)}>
            <button type="button" className="pj zm" style={z(1.05)} aria-haspopup="dialog" onClick={() => open(i)}>
              <img src={p.src} width={p.w} height={p.h} loading="lazy" alt={p.alt} style={{ objectPosition: p.pos }} />
              <span className="cap"><strong>{p.t}</strong><span>{p.d}</span></span>
              <span className="mag"><Icon n="zoom" s={22} /></span>
            </button>
          </li>))}
        </ul>
      </div>
    </section>
  )
}

const Process = () => (
  <section className="sec" aria-labelledby="t-pr">
    <div className="wrap">
      <Head eb="Como trabalhamos" id="t-pr" lines={['Da sua ideia à instalação']} />
      <ol className="steps">{steps.map(([t, x], i) => (
        <li key={t} className="rv" style={d(i * 70)}><div className="num"><span className="cu">0{i + 1}</span><i /></div><h3>{t}</h3><p>{x}</p></li>))}
      </ol>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="sec tm" aria-labelledby="t-tm">
    <div className="wrap">
      <Head eb="Experiência do cliente" id="t-tm" lines={['Confiança também faz parte do projeto']} />
      <ul className="tm-g">{quotes.map(([q, s], i) => (
        <li key={s} className="rv" style={d(i * 70)}>
          <figure><p className="tag">Depoimento ilustrativo</p><blockquote><p>“{q}”</p></blockquote><hr /><figcaption>{s}</figcaption></figure>
        </li>))}
      </ul>
    </div>
  </section>
)

const Footer = () => (
  <footer className="ft dk">
    <div className="wrap">
      <div className="ft-g">
        <div><a href="#top" className="logo" aria-label="FERRO & FORMA, início"><Logo light /><span><b>FERRO &amp; FORMA</b><small>Serralheria sob medida</small></span></a><p>Estruturas bem pensadas. Acabamentos que valorizam.</p></div>
        <nav aria-label="Rodapé"><h2>Navegação</h2><ul>{nav.map(([h, t]) => <li key={h}><a href={h}>{t}</a></li>)}</ul></nav>
        <div><h2>Atendimento</h2><ul><li>Residencial e comercial</li><li>Projetos sob consulta</li><li><a className="lnk" href="#contato">Fale pelo WhatsApp</a></li></ul></div>
      </div>
      <div className="ft-b"><p>FERRO &amp; FORMA — Marca fictícia. Site demonstrativo.</p><p>Imagens e depoimentos ilustrativos.</p></div>
    </div>
  </footer>
)

export default function App() {
  const [service, setService] = useState('')
  const [lb, setLb] = useState<number | null>(null)

  useEffect(() => { // revelação única ao entrar na viewport; sem IO, tudo permanece visível
    if (!('IntersectionObserver' in window)) return
    document.documentElement.classList.add('js')
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => { // links de orçamento levam o foco ao título do formulário
    const h = (e: MouseEvent) => {
      if ((e.target as Element).closest('a[href="#contato"]')) setTimeout(() => document.getElementById('form-title')?.focus({ preventScroll: true }), 0)
    }
    document.addEventListener('click', h)
    return () => document.removeEventListener('click', h)
  }, [])

  const pick = (t: string) => {
    setService(t)
    document.getElementById('contato')?.scrollIntoView({ block: 'start' })
    document.getElementById('form-title')?.focus({ preventScroll: true })
  }

  return (
    <div id="top">
      <a className="skip" href="#main">Pular para o conteúdo</a>
      <div className="top"><div className="wrap top-in"><span>Projetos sob medida para residências e empresas</span><a className="lnk" href="#contato">Solicite seu orçamento</a></div></div>
      <Header />
      <main id="main">
        <Hero /><Benefits /><Services onPick={pick} /><About /><Gallery open={setLb} /><Process /><Testimonials /><Contact service={service} setService={setService} />
      </main>
      <Footer />
      <Lightbox i={lb} set={setLb} />
    </div>
  )
}
