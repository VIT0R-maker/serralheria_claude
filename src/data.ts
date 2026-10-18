import portao from './assets/portao.webp'
import escada from './assets/escada.webp'
import pergolado from './assets/pergolado.webp'
import guarda from './assets/guarda-corpo.webp'

export const OTHER = 'Outro / preciso de orientação'
export const nav = [['#servicos', 'Serviços'], ['#projetos', 'Projetos'], ['#sobre', 'Sobre'], ['#contato', 'Contato']] as const
export const benefits = [
  { i: 'frame', t: 'Projeto sob medida', d: 'Soluções pensadas para cada espaço.' },
  { i: 'shield', t: 'Acabamento cuidadoso', d: 'Atenção aos detalhes em cada etapa.' },
  { i: 'cube', t: 'Instalação planejada', d: 'Execução alinhada ao seu projeto.' },
]
export const services = [
  { i: 'portao', t: 'Portões sob medida', d: 'Modelos de correr e de abrir, com desenho integrado à fachada.' },
  { i: 'porta', t: 'Portas e grades', d: 'Proteção e funcionalidade para acessos, janelas e ambientes.' },
  { i: 'guarda', t: 'Guarda-corpos e corrimãos', d: 'Soluções para escadas, varandas e áreas de circulação.' },
  { i: 'cobertura', t: 'Coberturas e estruturas', d: 'Estruturas metálicas dimensionadas conforme cada projeto.' },
  { i: 'escada', t: 'Escadas metálicas', d: 'Desenho funcional com presença arquitetônica.' },
  { i: 'pecas', t: 'Peças especiais', d: 'Mobiliário e elementos em metal feitos sob encomenda.' },
]
export const projects = [
  { t: 'Portão ripado', d: 'Privacidade e presença na fachada', src: portao, w: 669, h: 186, pos: '30% 50%', alt: 'Portão ripado preto em fachada de concreto e jardim' },
  { t: 'Escada metálica', d: 'Leveza visual e estrutura marcante', src: escada, w: 668, h: 186, pos: '60% 50%', alt: 'Escada metálica com degraus de madeira e guarda-corpo de tirantes' },
  { t: 'Pergolado', d: 'Integração entre arquitetura e área externa', src: pergolado, w: 669, h: 187, pos: '50% 40%', alt: 'Pergolado metálico preto sobre área gourmet com plantas' },
  { t: 'Guarda-corpo', d: 'Detalhes que completam o ambiente', src: guarda, w: 668, h: 187, pos: '55% 50%', alt: 'Guarda-corpo metálico de barras verticais em varanda' },
]
export const steps = [
  ['Conte sua ideia', 'Envie referências, fotos e medidas iniciais.'],
  ['Alinhamos os detalhes', 'Definimos necessidades, materiais e acabamentos.'],
  ['Você aprova a proposta', 'Escopo, valores e prazos combinados com clareza.'],
  ['Produção e instalação', 'Executamos conforme o projeto aprovado.'],
]
export const quotes = [
  ['O desenho do portão ficou integrado à fachada, exatamente como imaginávamos.', 'Exemplo — projeto residencial'],
  ['O atendimento ajudou a esclarecer materiais, medidas e opções de acabamento.', 'Exemplo — projeto comercial'],
  ['O cuidado com os detalhes fez diferença no resultado do ambiente.', 'Exemplo — projeto sob medida'],
]
