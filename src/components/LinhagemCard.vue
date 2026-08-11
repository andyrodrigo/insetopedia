<script setup lang="ts">
import type { Linhagem } from '../types/insetopedia'

defineProps<{
  linhagem: Linhagem
  totalCriaturas: number
}>()
</script>

<template>
  <RouterLink
    class="linhagem-card"
    :style="{ '--linhagem-theme': linhagem.tema ?? '#6f7d55' }"
    :to="`/linhagem/${linhagem.id}`"
  >
    <div class="linhagem-card__image" aria-hidden="true">
      <img :src="linhagem.imagemCapa" :alt="''" />
    </div>
    <div class="linhagem-card__body">
      <p class="eyebrow">{{ totalCriaturas }} criaturas</p>
      <h2>{{ linhagem.nome }}</h2>
      <p>{{ linhagem.descricao }}</p>
    </div>
  </RouterLink>
</template>
