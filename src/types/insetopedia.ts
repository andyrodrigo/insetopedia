export type LinhagemId =
  | 'baratas'
  | 'formigas'
  | 'abelhas'
  | 'moscas'
  | 'vespas'
  | 'louva-deus'
  | 'besouros'
  | 'mosquitos'
  | 'cupins'
  | 'gafanhotos'
  | 'pulgas'
  | 'carrapatos'
  | 'aranhas'
  | 'escorpioes'

export type InsetoId = string

export type TipoEvolucao =
  | 'linear'
  | 'ramificada'
  | 'normal'
  | 'lendaria'
  | 'alternativa'
  | 'especial'
  | 'forma-lendaria'
  | 'casta-especial'
  | 'individuo-unico'

export interface EvolucaoDestino {
  insetoId: InsetoId
  tipo: TipoEvolucao
  descricao?: string
  condicoes?: string[]
}

export interface EvolucaoOrigem {
  insetoId: InsetoId
  tipo: TipoEvolucao
  descricao?: string
}

export interface Inseto {
  id: InsetoId
  nome: string
  nomeIngles?: string
  imagem: string
  descricao: string
  linhagem: LinhagemId
  estagio: string
  caracteristicas: string[]
  habitat: string[]
  comportamento: string[]
  tags: string[]
  evolucoes: EvolucaoDestino[]
  evolucaoDe?: EvolucaoOrigem[]
  tipoEvolucao?: TipoEvolucao
}

export interface Linhagem {
  id: LinhagemId
  nome: string
  nomeIngles?: string
  insetoBase?: InsetoId
  descricao: string
  imagemCapa: string
  tema?: string
  criaturas: InsetoId[]
}

export interface BreadcrumbItem {
  label: string
  to?: string
}

export interface EvolutionTreeNode {
  inseto: Inseto
  relacao?: EvolucaoDestino
  filhos: EvolutionTreeNode[]
}

export type ResultadoBuscaTipo = 'linhagem' | 'inseto'

export interface ResultadoBusca {
  id: string
  tipo: ResultadoBuscaTipo
  titulo: string
  subtitulo: string
  descricao: string
  imagem: string
  tags: string[]
  to: string
}
