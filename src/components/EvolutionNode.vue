<script setup lang="ts">
import type { EvolutionTreeNode } from '../types/insetopedia'
import EvolutionConnection from './EvolutionConnection.vue'
import InsetoImage from './InsetoImage.vue'

defineProps<{
  node: EvolutionTreeNode
  selectedInsetoId?: string
}>()
</script>

<template>
  <li class="evolution-node" :class="{ 'evolution-node--branching': node.filhos.length > 1 }">
    <div class="evolution-node__entry">
      <EvolutionConnection v-if="node.relacao" :tipo="node.relacao.tipo" />
      <RouterLink
        class="evolution-node__card"
        :class="{ 'evolution-node__card--selected': node.inseto.id === selectedInsetoId }"
        :to="`/inseto/${node.inseto.id}`"
      >
        <InsetoImage
          :src="node.inseto.imagem"
          :alt="node.inseto.nome"
          aspect-ratio="1 / 1"
          fit="contain"
        />
        <span class="evolution-node__text">
          <span class="evolution-node__stage">{{ node.inseto.estagio }}</span>
          <span class="evolution-node__name">{{ node.inseto.nome }}</span>
          <span v-if="node.relacao" class="evolution-node__type">{{ node.relacao.tipo }}</span>
        </span>
      </RouterLink>
    </div>

    <ol v-if="node.filhos.length" class="evolution-node__children">
      <EvolutionNode
        v-for="filho in node.filhos"
        :key="`${node.inseto.id}-${filho.inseto.id}`"
        :node="filho"
        :selected-inseto-id="selectedInsetoId"
      />
    </ol>
  </li>
</template>
