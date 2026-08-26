import galeriasJson from './galerias.json'
import type { ItemGaleria, LinhagemId } from '../types/insetopedia'

// Para acrescentar imagens, edite apenas galerias.json.
export const galerias = galeriasJson as Record<LinhagemId, ItemGaleria[]>
