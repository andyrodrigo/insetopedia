<script setup lang="ts">
import type { EvolutionTreeNode, Linhagem } from '../types/insetopedia'
import EvolutionNode from './EvolutionNode.vue'

defineProps<{
  linhagem: Linhagem
  nodes: EvolutionTreeNode[]
  selectedInsetoId?: string
}>()
</script>

<template>
  <section
    class="evolution-tree"
    :style="{ '--linhagem-theme': linhagem.tema ?? '#6f7d55' }"
    aria-labelledby="evolution-tree-title"
  >
    <div class="section-heading">
      <p class="eyebrow">Registro evolutivo</p>
      <h2 id="evolution-tree-title">Linhagem evolutiva</h2>
    </div>

    <div v-if="nodes.length" class="evolution-tree__scroll">
      <ol class="evolution-tree__roots">
        <EvolutionNode
          v-for="node in nodes"
          :key="node.inseto.id"
          :node="node"
          :selected-inseto-id="selectedInsetoId"
        />
      </ol>
    </div>

    <p v-else class="empty-state">Nenhuma relação evolutiva cadastrada para esta linhagem.</p>
  </section>
</template>
