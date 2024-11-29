<template>
  <div>
    lol
  </div>
</template>

<script lang="ts" setup>
const workExperiencesStore = useWorkExperiencesStore()
const projectsStore = useProjectsStore()

onMounted(() => {
  workExperiencesStore.fetchWorkExperiences()
  projectsStore.fetchProjects()
})
</script>

<style>

</style>
