<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    aspectRatio?: string
    fit?: 'cover' | 'contain'
  }>(),
  {
    aspectRatio: '4 / 3',
    fit: 'cover',
  },
)

const imagemFalhou = ref(false)
const letraInicial = computed(() => props.alt.trim().slice(0, 1) || '?')

watch(
  () => props.src,
  () => {
    imagemFalhou.value = false
  },
)
</script>

<template>
  <div class="inseto-image" :style="{ aspectRatio }">
    <img
      v-if="src && !imagemFalhou"
      :src="src"
      :alt="alt"
      :style="{ objectFit: fit }"
      loading="lazy"
      decoding="async"
      @error="imagemFalhou = true"
    />
    <div v-else class="inseto-image__placeholder" aria-hidden="true">
      <span>{{ letraInicial }}</span>
    </div>
  </div>
</template>
