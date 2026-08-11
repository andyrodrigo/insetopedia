import { insetos, linhagens } from '../data'
import type { Inseto, InsetoId, Linhagem, LinhagemId } from '../types/insetopedia'

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

function normalizarBusca(valor: string): string {
  return valor
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
}
