<script setup lang="ts">
const model = defineModel<string>({ default: '' })

defineProps<{
  label: string
  placeholder?: string
}>()
</script>

<template>
  <label class="search-bar">
    <span>{{ label }}</span>
    <input v-model="model" type="search" :placeholder="placeholder" />
  </label>
</template>
