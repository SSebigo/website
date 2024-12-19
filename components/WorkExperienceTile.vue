<template>
  <button
    class="w-full flex justify-between items-center rounded-full border p-3 sm:p-5"
    @click="emit('toggle', true, workExperience)"
  >
    <div class="flex items-center">
      <NuxtImg
        :src="workExperience.companyLogo"
        class="w-14 h-14 rounded-full mr-5"
      />
      <div class="text-start">
        <p class="font-light">
          {{ $t(workExperience.position) }}
        </p>
        <p class="font-semibold">
          {{ workExperience.companyName }}
        </p>
      </div>
    </div>
    <p class="hidden sm:block text-sm text-gray-500">
      {{ $t(workExperience.startDate) }} - {{ $t(workExperience.endDate) }}
    </p>
  </button>
</template>

<script lang="ts" setup>
import type { IWorkExperience } from '~/domain/work_experience'

defineProps<{
  workExperience: IWorkExperience
}>()

const emit = defineEmits<{
  (e: 'toggle', value: boolean, workExperience: IWorkExperience): void
}>()
</script>

<style>

</style>
