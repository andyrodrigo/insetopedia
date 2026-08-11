<script setup lang="ts">
import type { ResultadoBusca } from '../types/insetopedia'
import InsetoImage from './InsetoImage.vue'

defineProps<{
  termo: string
  resultados: ResultadoBusca[]
}>()
</script>

<template>
  <section class="search-results" aria-live="polite">
    <div class="section-heading">
      <p class="eyebrow">Busca do catálogo</p>
      <h2>
        <template v-if="resultados.length === 1">1 registro encontrado</template>
        <template v-else>{{ resultados.length }} registros encontrados</template>
      </h2>
    </div>

    <div v-if="resultados.length" class="search-results__grid">
      <RouterLink
        v-for="resultado in resultados"
        :key="`${resultado.tipo}-${resultado.id}`"
        class="search-result"
        :to="resultado.to"
      >
        <InsetoImage
          :src="resultado.imagem"
          :alt="resultado.titulo"
          aspect-ratio="4 / 3"
          fit="contain"
        />
        <span class="search-result__body">
          <span class="eyebrow">{{ resultado.subtitulo }}</span>
          <span class="search-result__title">{{ resultado.titulo }}</span>
          <span class="search-result__description">{{ resultado.descricao }}</span>
          <span class="tag-list">
            <span v-for="tag in resultado.tags" :key="tag">{{ tag }}</span>
          </span>
        </span>
      </RouterLink>
    </div>

    <p v-else class="empty-state">
      Nenhum registro encontrado para "{{ termo }}". Tente buscar por nome, linhagem ou tag.
    </p>
  </section>
</template>
