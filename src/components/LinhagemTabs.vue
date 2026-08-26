<script setup lang="ts">
import type { Linhagem } from '../types/insetopedia'

defineProps<{
  linhagem: Linhagem
}>()
</script>

<template>
  <nav class="lineage-tabs" aria-label="Seções da civilização">
    <RouterLink :to="`/linhagem/${linhagem.id}`" exact-active-class="lineage-tabs__link--active">
      Registro
    </RouterLink>
    <RouterLink :to="`/linhagem/${linhagem.id}/galeria`" active-class="lineage-tabs__link--active">
      Galeria
    </RouterLink>
  </nav>
</template>
