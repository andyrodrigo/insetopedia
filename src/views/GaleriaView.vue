<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '../components/Breadcrumb.vue'
import InsetoImage from '../components/InsetoImage.vue'
import LinhagemTabs from '../components/LinhagemTabs.vue'
import { galerias } from '../data'
import { buscarLinhagemPorId } from '../utils/catalogo'

const route = useRoute()
const linhagem = computed(() => buscarLinhagemPorId(String(route.params.id)))
const itens = computed(() => (linhagem.value ? galerias[linhagem.value.id] ?? [] : []))
</script>

<template>
  <section v-if="linhagem" class="page-section gallery-page" :style="{ '--linhagem-theme': linhagem.tema ?? '#6f7d55' }">
    <Breadcrumb :items="[{ label: 'Civilizações', to: '/' }, { label: linhagem.nome, to: `/linhagem/${linhagem.id}` }, { label: 'Galeria' }]" />
    <LinhagemTabs :linhagem="linhagem" />

    <header class="gallery-heading">
      <p class="eyebrow">Arquivo ilustrado</p>
      <h1>Galeria de {{ linhagem.nome }}</h1>
      <p>Pranchas, estudos e registros visuais preservados no catálogo da civilização.</p>
    </header>

    <div v-if="itens.length" class="gallery-grid">
      <figure v-for="(item, index) in itens" :key="`${item.imagem}-${item.titulo}`" class="gallery-plate">
        <InsetoImage :src="item.imagem" :alt="item.titulo" aspect-ratio="4 / 3" />
        <figcaption>
          <span class="gallery-plate__number">Prancha {{ String(index + 1).padStart(2, '0') }}</span>
          <h2>{{ item.titulo }}</h2>
          <p>{{ item.descricao }}</p>
        </figcaption>
      </figure>
    </div>

    <p v-else class="empty-state">Ainda não há imagens catalogadas para esta civilização.</p>
  </section>

  <section v-else class="page-section">
    <Breadcrumb :items="[{ label: 'Civilizações', to: '/' }, { label: 'Não encontrada' }]" />
    <h1>Civilização não encontrada</h1>
  </section>
</template>
