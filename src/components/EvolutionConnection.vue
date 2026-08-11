<script setup lang="ts">
import type { TipoEvolucao } from '../types/insetopedia'

defineProps<{
  tipo?: TipoEvolucao
}>()
</script>

<template>
  <span class="evolution-connection" :class="`evolution-connection--${tipo ?? 'normal'}`">
    <span class="evolution-connection__line"></span>
    <span class="evolution-connection__sigil" aria-hidden="true"></span>
  </span>
</template>
