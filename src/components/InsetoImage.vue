<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
  alt: string
}>()

const imagemFalhou = ref(false)
</script>

<template>
  <div class="inseto-image">
    <img v-if="!imagemFalhou" :src="src" :alt="alt" @error="imagemFalhou = true" />
    <div v-else class="inseto-image__placeholder" aria-hidden="true">
      <span>{{ alt.slice(0, 1) }}</span>
    </div>
  </div>
</template>
