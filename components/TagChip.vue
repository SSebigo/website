<template>
  <div
    :class="color"
    class="rounded-full px-4 py-2 text-sm font-semibold text-center"
  >
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  text: string
  color: string
}>()
</script>

<style>

</style>
