<script setup lang="ts">
import type { Inseto } from '../types/insetopedia'
import InsetoImage from './InsetoImage.vue'

defineProps<{
  inseto: Inseto
}>()
</script>

<template>
  <RouterLink class="inseto-card" :to="`/inseto/${inseto.id}`">
    <InsetoImage :src="inseto.imagem" :alt="inseto.nome" aspect-ratio="1 / 1" fit="contain" />
    <div class="inseto-card__body">
      <p class="eyebrow">{{ inseto.estagio }}</p>
      <h3>{{ inseto.nome }}</h3>
      <p>{{ inseto.descricao }}</p>
    </div>
  </RouterLink>
</template>
