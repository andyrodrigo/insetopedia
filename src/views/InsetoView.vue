<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '../components/Breadcrumb.vue'
import InsetoImage from '../components/InsetoImage.vue'
import { buscarInsetoPorId, buscarLinhagemPorId } from '../utils/catalogo'

const route = useRoute()

const inseto = computed(() => buscarInsetoPorId(String(route.params.id)))
const linhagem = computed(() => (inseto.value ? buscarLinhagemPorId(inseto.value.linhagem) : undefined))
const evolucoes = computed(() =>
  inseto.value?.evolucoes.map((evolucao) => ({
    ...evolucao,
    inseto: buscarInsetoPorId(evolucao.insetoId),
  })) ?? [],
)
const origens = computed(() =>
  inseto.value?.evolucaoDe?.map((origem) => ({
    ...origem,
    inseto: buscarInsetoPorId(origem.insetoId),
  })) ?? [],
)
</script>

<template>
  <section v-if="inseto" class="page-section">
    <Breadcrumb
      :items="[
        { label: 'Linhagens', to: '/' },
        { label: linhagem?.nome ?? inseto.linhagem, to: `/linhagem/${inseto.linhagem}` },
        { label: inseto.nome },
      ]"
    />

    <article class="inseto-detail">
      <InsetoImage :src="inseto.imagem" :alt="inseto.nome" aspect-ratio="3 / 4" fit="contain" />

      <div class="inseto-detail__content">
        <p class="eyebrow">{{ linhagem?.nome }} / {{ inseto.estagio }}</p>
        <h1>{{ inseto.nome }}</h1>
        <p v-if="inseto.nomeIngles" class="muted">{{ inseto.nomeIngles }}</p>
        <p class="lead">{{ inseto.descricao }}</p>

        <div class="attribute-grid">
          <section>
            <h2>Características</h2>
            <p>{{ inseto.caracteristicas.join(', ') || 'Não definido.' }}</p>
          </section>
          <section>
            <h2>Habitat</h2>
            <p>{{ inseto.habitat.join(', ') || 'Não definido.' }}</p>
          </section>
          <section>
            <h2>Comportamento</h2>
            <p>{{ inseto.comportamento.join(', ') || 'Não definido.' }}</p>
          </section>
          <section>
            <h2>Tags</h2>
            <p>{{ inseto.tags.join(', ') || 'Não definido.' }}</p>
          </section>
        </div>

        <section class="relation-section">
          <h2>Evolução</h2>
          <div class="relation-list">
            <RouterLink
              v-for="origem in origens"
              :key="`origem-${origem.insetoId}`"
              :to="`/inseto/${origem.insetoId}`"
            >
              Vem de {{ origem.inseto?.nome ?? origem.insetoId }} ({{ origem.tipo }})
            </RouterLink>
            <RouterLink
              v-for="evolucao in evolucoes"
              :key="`destino-${evolucao.insetoId}`"
              :to="`/inseto/${evolucao.insetoId}`"
            >
              Evolui para {{ evolucao.inseto?.nome ?? evolucao.insetoId }} ({{ evolucao.tipo }})
            </RouterLink>
            <p v-if="!origens.length && !evolucoes.length">Sem relações de evolução cadastradas.</p>
          </div>
        </section>
      </div>
    </article>
  </section>

  <section v-else class="page-section">
    <Breadcrumb :items="[{ label: 'Linhagens', to: '/' }, { label: 'Não encontrado' }]" />
    <h1>Criatura não encontrada</h1>
  </section>
</template>
