<script setup lang="ts">
import type { Linhagem } from '../types/insetopedia'
import InsetoImage from './InsetoImage.vue'

defineProps<{
  linhagem: Linhagem
  totalCriaturas: number
  tags: string[]
}>()
</script>

<template>
  <RouterLink
    class="linhagem-card"
    :style="{ '--linhagem-theme': linhagem.tema ?? '#6f7d55' }"
    :to="`/linhagem/${linhagem.id}`"
  >
    <div class="linhagem-card__image">
      <InsetoImage :src="linhagem.imagemCapa" :alt="linhagem.nome" aspect-ratio="16 / 10" />
    </div>
    <div class="linhagem-card__body">
      <p class="eyebrow">Civilização</p>
      <h2>{{ linhagem.nome }}</h2>
      <p>
        {{ linhagem.descricao.slice(0, 150) }}
        {{ linhagem.descricao.length > 150 ? '...' : '' }}
      </p>
      <div class="tag-list" aria-label="Marcadores">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <p class="linhagem-card__count">{{ totalCriaturas }} criaturas</p>
    </div>
  </RouterLink>
</template>
