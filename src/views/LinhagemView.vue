<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '../components/Breadcrumb.vue'
import InsetoCard from '../components/InsetoCard.vue'
import { buscarLinhagemPorId, listarInsetosDaLinhagem } from '../utils/catalogo'

const route = useRoute()

const linhagem = computed(() => buscarLinhagemPorId(String(route.params.id)))
const criaturas = computed(() => (linhagem.value ? listarInsetosDaLinhagem(linhagem.value) : []))
</script>

<template>
  <section v-if="linhagem" class="page-section">
    <Breadcrumb :items="[{ label: 'Linhagens', to: '/' }, { label: linhagem.nome }]" />

    <div class="detail-header" :style="{ '--linhagem-theme': linhagem.tema ?? '#6f7d55' }">
      <div>
        <p class="eyebrow">{{ criaturas.length }} criaturas</p>
        <h1>{{ linhagem.nome }}</h1>
        <p class="lead">{{ linhagem.descricao }}</p>
      </div>
    </div>

    <div v-if="criaturas.length" class="inseto-grid">
      <InsetoCard v-for="inseto in criaturas" :key="inseto.id" :inseto="inseto" />
    </div>

    <p v-else class="empty-state">Nenhuma criatura cadastrada nesta linhagem.</p>
  </section>

  <section v-else class="page-section">
    <Breadcrumb :items="[{ label: 'Linhagens', to: '/' }, { label: 'Não encontrada' }]" />
    <h1>Linhagem não encontrada</h1>
  </section>
</template>
