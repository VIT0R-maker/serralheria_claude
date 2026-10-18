import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Icon } from './Icon'
import { config } from './config'
import { OTHER, services } from './data'

type Errs = Record<string, string>
const Field = ({ k, label, err, children }: { k: string; label: string; err: Errs; children: ReactNode }) => (
  <div className="f"><label htmlFor={'f-' + k}>{label}</label>{children}{err[k] && <p id={'e-' + k} className="err">{err[k]}</p>}</div>
)

export function Contact({ service, setService }: { service: string; setService: (s: string) => void }) {
  const [v, setV] = useState({ name: '', city: '', msg: '' })
  const [err, setErr] = useState<Errs>({})
  const [text, setText] = useState('')
  const [note, setNote] = useState('')
  const dlg = useRef<HTMLDialogElement>(null)
  const num = config.whatsappNumber.replace(/\D/g, '')
  const a = (k: string) => ({ id: 'f-' + k, 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? 'e-' + k : undefined })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: Errs = {}
    if (!v.name.trim()) er.name = 'Informe seu nome.'
    if (!v.city.trim()) er.city = 'Informe a cidade ou o bairro.'
    if (!service) er.service = 'Escolha o que você precisa.'
    setErr(er)
    const first = Object.keys(er)[0]
    if (first) { document.getElementById('f-' + first)?.focus(); return }
    const msg = ['Olá! Gostaria de pedir um orçamento.', `Nome: ${v.name.trim()}`, `Cidade/bairro: ${v.city.trim()}`, `Serviço: ${service}`, v.msg.trim() && `Projeto: ${v.msg.trim()}`].filter(Boolean).join('\n')
    if (/^\d{10,15}$/.test(num)) window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    else { setText(msg); setNote(''); dlg.current?.showModal() }
  }
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setNote('Mensagem copiada.') }
    catch { setNote('Não foi possível copiar automaticamente. Selecione o texto e copie.') }
  }
  const set = (k: 'name' | 'city' | 'msg') => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value })

  return (
    <section id="contato" className="sec dk" aria-labelledby="t-ct">
      <div className="wrap ct-g">
        <div className="rv">
          <p className="eb">Vamos conversar?</p>
          <h2 id="t-ct">Seu próximo projeto começa com uma conversa<span className="cu">.</span></h2>
          <p className="lead">Conte o que você precisa. Fotos do local, medidas aproximadas e referências ajudam a entender sua ideia.</p>
          <ul className="ask">{[['chat', 'Qual solução você procura?'], ['pin', 'Em qual cidade será o projeto?'], ['cube', 'Você já tem medidas ou referências?']].map(([i, t]) => <li key={t}><span className="cu"><Icon n={i} s={40} /></span>{t}</li>)}</ul>
        </div>
        <form className="panel rv" onSubmit={submit} noValidate>
          <h2 id="form-title" tabIndex={-1}>Peça seu orçamento</h2>
          <div className="row">
            <Field k="name" label="Seu nome" err={err}><input {...a('name')} autoComplete="name" placeholder="Digite seu nome" value={v.name} onChange={set('name')} /></Field>
            <Field k="city" label="Cidade / bairro" err={err}><input {...a('city')} autoComplete="address-level2" placeholder="Ex.: São Paulo, Vila Mariana" value={v.city} onChange={set('city')} /></Field>
          </div>
          <Field k="service" label="O que você precisa?" err={err}>
            <select {...a('service')} value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">Selecione um serviço</option>
              {[...services.map((s) => s.t), OTHER].map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
          <Field k="msg" label="Conte um pouco sobre o projeto (opcional)" err={err}><textarea id="f-msg" rows={4} placeholder="Ex.: Tipo de projeto, medidas aproximadas, referências, etc." value={v.msg} onChange={set('msg')} /></Field>
          <button className="btn btn-lg wide" type="submit"><Icon n="wa" s={26} />Continuar no WhatsApp</button>
          <p className="micro c">Você poderá revisar a mensagem no WhatsApp antes de enviá-la.</p>
        </form>
      </div>
      <dialog ref={dlg} className="pv" aria-labelledby="pv-t">
        <h2 id="pv-t">Prévia da mensagem</h2>
        <p><strong>Demonstração: nenhum número de atendimento foi configurado.</strong></p>
        <textarea readOnly rows={7} value={text} aria-label="Mensagem preparada" />
        <p role="status" className="micro">{note}</p>
        <div className="pv-a"><button className="btn" type="button" onClick={copy}>Copiar mensagem</button><button className="btn ghost" type="button" onClick={() => dlg.current?.close()}>Fechar</button></div>
      </dialog>
    </section>
  )
}
