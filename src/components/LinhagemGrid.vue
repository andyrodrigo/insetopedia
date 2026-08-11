<script setup lang="ts">
import type { Linhagem } from '../types/insetopedia'
import LinhagemCard from './LinhagemCard.vue'

defineProps<{
  linhagens: Linhagem[]
  totalCriaturasPorLinhagem: Record<string, number>
}>()
</script>

<template>
  <div class="linhagem-grid">
    <LinhagemCard
      v-for="linhagem in linhagens"
      :key="linhagem.id"
      :linhagem="linhagem"
      :total-criaturas="totalCriaturasPorLinhagem[linhagem.id] ?? 0"
    />
  </div>
</template>
