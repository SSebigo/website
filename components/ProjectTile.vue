<template>
  <button
    class="w-full flex justify-between items-center rounded-full border p-5"
    @click="emit('toggle', true, project)"
  >
    <div class="flex items-center">
      <NuxtImg
        :src="project.projectLogo ?? 'https://placehold.co/200'"
        class="w-14 h-14 rounded-full mr-5"
      />
      <div class="text-start">
        <p class="font-semibold">
          {{ project.name }}
        </p>
        <p class="font-light">
          {{ $t(project.shortDescription) }}
        </p>
      </div>
    </div>
    <a
      :href="project.githubLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        name="mdi:external-link"
        size="24"
        class="mx-2 mt-1"
      />
    </a>
  </button>
</template>

<script lang="ts" setup>
import type { IProject } from '~/domain/project'

defineProps<{
  project: IProject
}>()

const emit = defineEmits<{
  (e: 'toggle', value: boolean, project: IProject): void
}>()
</script>

<style>

</style>
