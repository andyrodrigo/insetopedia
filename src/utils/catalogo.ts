import { insetos, linhagens } from '../data'
import type {
  EvolutionTreeNode,
  Inseto,
  InsetoId,
  Linhagem,
  LinhagemId,
  ResultadoBusca,
} from '../types/insetopedia'

export const insetosPorId = new Map<InsetoId, Inseto>(insetos.map((inseto) => [inseto.id, inseto]))

export const linhagensPorId = new Map<LinhagemId, Linhagem>(
  linhagens.map((linhagem) => [linhagem.id, linhagem]),
)

export function buscarInsetoPorId(id: string): Inseto | undefined {
  return insetosPorId.get(id)
}

export function buscarLinhagemPorId(id: string): Linhagem | undefined {
  return linhagensPorId.get(id as LinhagemId)
}

export function listarInsetosDaLinhagem(linhagem: Linhagem): Inseto[] {
  return linhagem.criaturas
    .map((insetoId) => insetosPorId.get(insetoId))
    .filter((inseto): inseto is Inseto => Boolean(inseto))
}

export function montarArvoreEvolutiva(linhagem: Linhagem): EvolutionTreeNode[] {
  const criaturas = listarInsetosDaLinhagem(linhagem)
  const idsDaLinhagem = new Set(criaturas.map((inseto) => inseto.id))
  const idsComOrigem = new Set<InsetoId>()

  for (const inseto of criaturas) {
    for (const evolucao of inseto.evolucoes) {
      if (idsDaLinhagem.has(evolucao.insetoId)) {
        idsComOrigem.add(evolucao.insetoId)
      }
    }
  }

  const raizPreferida = linhagem.insetoBase ? insetosPorId.get(linhagem.insetoBase) : undefined
  const raizes = [
    ...(raizPreferida && idsDaLinhagem.has(raizPreferida.id) ? [raizPreferida] : []),
    ...criaturas.filter((inseto) => inseto.id !== raizPreferida?.id && !idsComOrigem.has(inseto.id)),
  ]

  return raizes.map((inseto) => montarNoEvolutivo(inseto, idsDaLinhagem, new Set()))
}

function montarNoEvolutivo(
  inseto: Inseto,
  idsDaLinhagem: Set<InsetoId>,
  caminho: Set<InsetoId>,
): EvolutionTreeNode {
  const proximoCaminho = new Set(caminho)
  proximoCaminho.add(inseto.id)
  const filhos: EvolutionTreeNode[] = []

  for (const evolucao of inseto.evolucoes) {
    if (!idsDaLinhagem.has(evolucao.insetoId) || proximoCaminho.has(evolucao.insetoId)) {
      continue
    }

    const destino = insetosPorId.get(evolucao.insetoId)

    if (!destino) {
      continue
    }

    filhos.push({
      ...montarNoEvolutivo(destino, idsDaLinhagem, proximoCaminho),
      relacao: evolucao,
    })
  }

  return {
    inseto,
    filhos,
  }
}

export function filtrarLinhagens(termo: string): Linhagem[] {
  const busca = normalizarBusca(termo)

  if (!busca) {
    return linhagens
  }

  return linhagens.filter((linhagem) => {
    const criaturas = listarInsetosDaLinhagem(linhagem)

    return (
      normalizarBusca(linhagem.nome).includes(busca) ||
      criaturas.some((inseto) => normalizarBusca(inseto.nome).includes(busca))
    )
  })
}

export function pesquisarCatalogo(termo: string): ResultadoBusca[] {
  const busca = normalizarBusca(termo)

  if (!busca) {
    return []
  }

  const resultadosLinhagem = linhagens
    .filter((linhagem) => {
      const criaturas = listarInsetosDaLinhagem(linhagem)
      const campos = [
        linhagem.nome,
        linhagem.nomeIngles ?? '',
        linhagem.descricao,
        ...criaturas.flatMap((inseto) => [inseto.nome, inseto.nomeIngles ?? '', ...inseto.tags]),
      ]

      return campos.some((campo) => normalizarBusca(campo).includes(busca))
    })
    .map<ResultadoBusca>((linhagem) => ({
      id: linhagem.id,
      tipo: 'linhagem',
      titulo: linhagem.nome,
      subtitulo: 'Civilização',
      descricao: linhagem.descricao,
      imagem: linhagem.imagemCapa,
      tags: ['linhagem', `${listarInsetosDaLinhagem(linhagem).length} criaturas`],
      to: `/linhagem/${linhagem.id}`,
    }))

  const resultadosInsetos = insetos
    .filter((inseto) => {
      const linhagem = buscarLinhagemPorId(inseto.linhagem)
      const campos = [
        inseto.nome,
        inseto.nomeIngles ?? '',
        inseto.estagio,
        inseto.descricao,
        linhagem?.nome ?? '',
        linhagem?.nomeIngles ?? '',
        ...inseto.tags,
      ]

      return campos.some((campo) => normalizarBusca(campo).includes(busca))
    })
    .map<ResultadoBusca>((inseto) => {
      const linhagem = buscarLinhagemPorId(inseto.linhagem)

      return {
        id: inseto.id,
        tipo: 'inseto',
        titulo: inseto.nome,
        subtitulo: linhagem?.nome ?? inseto.linhagem,
        descricao: inseto.descricao,
        imagem: inseto.imagem,
        tags: [inseto.estagio, ...inseto.tags],
        to: `/inseto/${inseto.id}`,
      }
    })

  return [...resultadosInsetos, ...resultadosLinhagem]
}

function normalizarBusca(valor: string): string {
  return valor
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
}
