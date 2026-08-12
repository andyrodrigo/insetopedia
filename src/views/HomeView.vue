<script setup lang="ts">
import { computed, ref } from 'vue'
import LinhagemGrid from '../components/LinhagemGrid.vue'
import SearchBar from '../components/SearchBar.vue'
import SearchResults from '../components/SearchResults.vue'
import { linhagens } from '../data'
import { listarInsetosDaLinhagem, pesquisarCatalogo } from '../utils/catalogo'

const busca = ref('')

const termoBusca = computed(() => busca.value.trim())
const resultadosBusca = computed(() => pesquisarCatalogo(termoBusca.value))

const totalCriaturasPorLinhagem = computed(() =>
  Object.fromEntries(
    linhagens.map((linhagem) => [linhagem.id, listarInsetosDaLinhagem(linhagem).length]),
  ),
)

const tagsPorLinhagem = computed(() =>
  Object.fromEntries(
    linhagens.map((linhagem) => {
      const total = listarInsetosDaLinhagem(linhagem).length
      return [linhagem.id, ['civilização', total > 0 ? 'catalogada' : 'em pesquisa']]
    }),
  ),
)
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__content">
      <p class="eyebrow">Arquivo de campo / Bestiário científico</p>
      <h1>INSETOPEDIA</h1>
      <p class="lead">
        Enciclopédia das Civilizações dos Insetos, organizada como um catálogo vivo de linhagens,
        espécimes e registros de um mundo fictício.
      </p>
      <div class="hero-meta" aria-label="Resumo do acervo">
        <span>12 linhagens</span>
        <span>36 criaturas catalogadas</span>
        <span>100% frontend</span>
      </div>
    </div>

    <div class="hero-plate" aria-hidden="true">
      <div class="hero-plate__label">Fig. 01</div>
      <div class="hero-plate__specimen">
        <span></span>
      </div>
      <div class="hero-plate__caption">Placa provisória para ilustração de campo</div>
    </div>
  </section>

  <section class="page-section page-section--intro">
    <div>
      <p class="eyebrow">Civilizações</p>
      <h2>{{ termoBusca ? 'Resultados do catálogo' : 'Arquivo das linhagens' }}</h2>
    </div>

    <SearchBar v-model="busca" label="Buscar" placeholder="Nome, linhagem ou tag" />
  </section>

  <SearchResults v-if="termoBusca" :termo="termoBusca" :resultados="resultadosBusca" />

  <section v-else class="page-section">
    <LinhagemGrid
      :linhagens="linhagens"
      :total-criaturas-por-linhagem="totalCriaturasPorLinhagem"
      :tags-por-linhagem="tagsPorLinhagem"
    />
  </section>
</template>
