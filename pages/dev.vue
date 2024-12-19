<template>
  <div class="w-full flex justify-center py-12 xl:py-20 2xl:py-32">
    <Head>
      <Title>{{ $t('seo.projects.title') }}</Title>
      <Meta
        name="description"
        :content="$t('seo.projects.description')"
      />
    </Head>
    <ul class="mx-2 sm:mx-10 xl:mx-0 xl:w-5/6 2xl:w-3/4">
      <li
        v-for="(project, idx) in projectsStore.projects"
        :key="project.uid"
        class="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5"
      >
        <div
          v-if="idx % 2 === 1"
          class="hidden lg:block"
        />
        <div class="rounded-xl border px-2 py-3 sm:p-5">
          <!-- Header -->
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <NuxtImg
                :src="project?.projectLogo ?? 'https://placehold.co/200'"
                class="w-14 rounded-full mr-5"
              />
              <p class="font-semibold text-lg">
                {{ project?.name }}
              </p>
            </div>
            <a
              :href="project?.githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="mdi:external-link"
                size="24"
                class="mx-4 mt-1"
              />
            </a>
          </div>
          <!-- Description -->
          <div class="mx-2">
            <p class="whitespace-pre-line">
              {{ $t(project?.description) }}
            </p>
            <hr class="my-5">
          </div>
          <!-- Footer -->
          <div class="w-full">
            <ul class="flex flex-wrap justify-start">
              <li
                v-for="lang in project?.languages"
                :key="lang"
                class="m-1"
              >
                <TagChip
                  :text="lang"
                  color="bg-languages"
                />
              </li>
              <li
                v-for="framework in project?.frameworks"
                :key="framework"
                class="m-1"
              >
                <TagChip
                  :text="framework"
                  color="bg-frameworks text-white"
                />
              </li>
              <li
                v-for="db in project?.dbs"
                :key="db"
                class="m-1"
              >
                <TagChip
                  :text="db"
                  color="bg-dbs"
                />
              </li>
              <li
                v-for="tool in project?.tools"
                :key="tool"
                class="m-1"
              >
                <TagChip
                  :text="tool"
                  color="bg-tools text-white"
                />
              </li>
            </ul>
          </div>
        </div>
        <div
          v-if="idx % 2 === 0"
          class="hidden lg:block"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const projectsStore = useProjectsStore()

onMounted(() => {
  projectsStore.fetchProjects()
})
</script>

<style>

</style>
