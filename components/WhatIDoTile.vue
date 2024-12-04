<template>
  <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background border p-3">
    <Icon
      :name="icon"
      size="24"
    />
  </div>
  <div class="ml-5">
    <h3 class="font-merriweather font-normal mb-2">
      {{ $t(title) }}
    </h3>
    <p class="font-light">
      {{ $t(description) }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<style>

</style>
