<script setup lang="ts">
import { computed, ref } from 'vue'
import LinhagemGrid from '../components/LinhagemGrid.vue'
import SearchBar from '../components/SearchBar.vue'
import { filtrarLinhagens, listarInsetosDaLinhagem } from '../utils/catalogo'
import { linhagens } from '../data'

const busca = ref('')

const linhagensFiltradas = computed(() => filtrarLinhagens(busca.value))

const totalCriaturasPorLinhagem = computed(() =>
  Object.fromEntries(
    linhagens.map((linhagem) => [linhagem.id, listarInsetosDaLinhagem(linhagem).length]),
  ),
)
</script>

<template>
  <section class="page-section page-section--intro">
    <div>
      <p class="eyebrow">Enciclopédia interativa</p>
      <h1>Linhagens</h1>
      <p class="lead">
        Uma base de consulta para civilizações de insetos, preparada para crescer por arquivos
        TypeScript de dados.
      </p>
    </div>

    <SearchBar v-model="busca" label="Buscar" placeholder="Linhagem ou criatura" />
  </section>

  <section class="page-section">
    <LinhagemGrid
      :linhagens="linhagensFiltradas"
      :total-criaturas-por-linhagem="totalCriaturasPorLinhagem"
    />
  </section>
</template>
