<template>
  <div
    :class="color"
    class="rounded-full px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-center"
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
