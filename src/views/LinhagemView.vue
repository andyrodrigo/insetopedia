<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '../components/Breadcrumb.vue'
import EvolutionTree from '../components/EvolutionTree.vue'
import InsetoCard from '../components/InsetoCard.vue'
import InsetoImage from '../components/InsetoImage.vue'
import LinhagemTabs from '../components/LinhagemTabs.vue'
import {
  buscarLinhagemPorId,
  listarInsetosDaLinhagem,
  montarArvoreEvolutiva,
} from '../utils/catalogo'

const route = useRoute()

const linhagem = computed(() => buscarLinhagemPorId(String(route.params.id)))
const criaturas = computed(() => (linhagem.value ? listarInsetosDaLinhagem(linhagem.value) : []))
const arvoreEvolutiva = computed(() => (linhagem.value ? montarArvoreEvolutiva(linhagem.value) : []))
</script>

<template>
  <section v-if="linhagem" class="page-section lineage-page">
    <Breadcrumb :items="[{ label: 'Civilizações', to: '/' }, { label: linhagem.nome }]" />

    <article class="lineage-hero" :style="{ '--linhagem-theme': linhagem.tema ?? '#6f7d55' }">
      <div class="lineage-hero__content">
        <p class="eyebrow">Civilização</p>
        <h1>{{ linhagem.nome }}</h1>
        <p class="lineage-hero__subtitle">
          Registro de campo da civilização {{ linhagem.nome.toLowerCase() }}
        </p>
        <p class="lead">{{ linhagem.descricao }}</p>
        <div class="hero-meta" aria-label="Resumo da civilização">
          <span>{{ criaturas.length }} criaturas</span>
          <span>{{ linhagem.insetoBase ? 'base catalogada' : 'base indefinida' }}</span>
        </div>
      </div>

      <div class="lineage-hero__image">
        <InsetoImage :src="linhagem.imagemCapa" :alt="linhagem.nome" aspect-ratio="4 / 3" />
      </div>
    </article>

    <LinhagemTabs :linhagem="linhagem" />

    <EvolutionTree :linhagem="linhagem" :nodes="arvoreEvolutiva" />

    <!-- <section class="page-section">
      <div class="section-heading">
        <p class="eyebrow">Indivíduos</p>
        <h2>Espécimes registrados</h2>
      </div>

      <div v-if="criaturas.length" class="inseto-grid">
        <InsetoCard v-for="inseto in criaturas" :key="inseto.id" :inseto="inseto" />
      </div>

      <p v-else class="empty-state">Nenhuma criatura cadastrada nesta linhagem.</p>
    </section> -->
  </section>

  <section v-else class="page-section">
    <Breadcrumb :items="[{ label: 'Civilizações', to: '/' }, { label: 'Não encontrada' }]" />
    <h1>Linhagem não encontrada</h1>
  </section>
</template>
