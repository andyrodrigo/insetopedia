<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '../components/Breadcrumb.vue'
import EvolutionTree from '../components/EvolutionTree.vue'
import InsetoImage from '../components/InsetoImage.vue'
import {
  buscarInsetoPorId,
  buscarLinhagemPorId,
  montarArvoreEvolutiva,
} from '../utils/catalogo'

const route = useRoute()

const inseto = computed(() => buscarInsetoPorId(String(route.params.id)))
const linhagem = computed(() => (inseto.value ? buscarLinhagemPorId(inseto.value.linhagem) : undefined))
const arvoreEvolutiva = computed(() => (linhagem.value ? montarArvoreEvolutiva(linhagem.value) : []))

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

function textoLista(itens: string[]): string {
  return itens.length ? itens.join(', ') : 'Ainda não catalogado.'
}
</script>

<template>
  <section v-if="inseto" class="page-section specimen-page">
    <Breadcrumb
      :items="[
        { label: 'Civilizações', to: '/' },
        { label: linhagem?.nome ?? inseto.linhagem, to: `/linhagem/${inseto.linhagem}` },
        { label: inseto.nome },
      ]"
    />

    <article class="specimen-sheet" :style="{ '--linhagem-theme': linhagem?.tema ?? '#6f7d55' }">
      <aside class="specimen-sheet__plate">
        <InsetoImage :src="inseto.imagem" :alt="inseto.nome" aspect-ratio="4 / 5" fit="contain" />
        <p class="specimen-sheet__plate-caption">
          Ilustração catalográfica provisória
        </p>
      </aside>

      <div class="specimen-sheet__body">
        <p class="eyebrow">{{ linhagem?.nome ?? inseto.linhagem }} / {{ inseto.estagio }}</p>
        <h1>{{ inseto.nome }}</h1>
        <p class="specimen-sheet__english">{{ inseto.nomeIngles || 'Nome em inglês não catalogado' }}</p>

        <RouterLink
          v-if="linhagem"
          class="lineage-link"
          :to="`/linhagem/${linhagem.id}`"
        >
          Ver linhagem completa
        </RouterLink>

        <section class="specimen-reading">
          <h2>Descrição da Insetopedia</h2>
          <p>{{ inseto.descricao }}</p>
        </section>

        <div class="specimen-facts">
          <section>
            <h2>Características</h2>
            <p>{{ textoLista(inseto.caracteristicas) }}</p>
          </section>
          <section>
            <h2>Habitat</h2>
            <p>{{ textoLista(inseto.habitat) }}</p>
          </section>
          <section>
            <h2>Comportamento</h2>
            <p>{{ textoLista(inseto.comportamento) }}</p>
          </section>
          <section>
            <h2>Linhagem</h2>
            <RouterLink v-if="linhagem" :to="`/linhagem/${linhagem.id}`">{{ linhagem.nome }}</RouterLink>
            <p v-else>{{ inseto.linhagem }}</p>
          </section>
        </div>

        <section class="specimen-tags" aria-label="Tags">
          <span v-for="tag in inseto.tags" :key="tag">{{ tag }}</span>
          <span v-if="!inseto.tags.length">sem tags catalogadas</span>
        </section>

        <div class="evolution-relations">
          <section>
            <p class="eyebrow">Evolui de</p>
            <div v-if="origens.length" class="relation-pills">
              <RouterLink
                v-for="origem in origens"
                :key="`origem-${origem.insetoId}`"
                :to="`/inseto/${origem.insetoId}`"
              >
                {{ origem.inseto?.nome ?? origem.insetoId }}
                <span>{{ origem.tipo }}</span>
              </RouterLink>
            </div>
            <p v-else class="muted">Não possui evolução anterior catalogada.</p>
          </section>

          <section>
            <p class="eyebrow">Evolui para</p>
            <div v-if="evolucoes.length" class="relation-pills">
              <RouterLink
                v-for="evolucao in evolucoes"
                :key="`destino-${evolucao.insetoId}`"
                :to="`/inseto/${evolucao.insetoId}`"
              >
                {{ evolucao.inseto?.nome ?? evolucao.insetoId }}
                <span>{{ evolucao.tipo }}</span>
              </RouterLink>
            </div>
            <p v-else class="muted">Não possui próximas evoluções catalogadas.</p>
          </section>
        </div>
      </div>
    </article>

    <EvolutionTree
      v-if="linhagem"
      :linhagem="linhagem"
      :nodes="arvoreEvolutiva"
      :selected-inseto-id="inseto.id"
    />
  </section>

  <section v-else class="page-section">
    <Breadcrumb :items="[{ label: 'Civilizações', to: '/' }, { label: 'Não encontrado' }]" />
    <h1>Criatura não encontrada</h1>
  </section>
</template>
