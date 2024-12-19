<template>
  <div class="flex items-center">
    <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background border p-3">
      <Icon
        :name="icon"
        size="24"
      />
    </div>
    <h3 class="ml-3 font-merriweather font-normal sm:hidden">
      {{ $t(title) }}
    </h3>
  </div>
  <div class="mx-2 mt-3 mb-1 sm:ml-5 sm:mt-0 sm:mb-0 sm:mr-0">
    <h3 class="hidden font-merriweather font-normal mb-2 sm:block">
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
