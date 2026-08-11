<script setup lang="ts">
import Navigation from './Navigation.vue'
</script>

<template>
  <header class="app-header">
    <RouterLink class="brand" to="/" aria-label="Insetopedia">
      <span class="brand__mark" aria-hidden="true">I</span>
      <span class="brand__lockup">
        <span class="brand__text">INSETOPEDIA</span>
        <span class="brand__subtitle">Enciclopédia das Civilizações dos Insetos</span>
      </span>
    </RouterLink>

    <Navigation />
  </header>
</template>
