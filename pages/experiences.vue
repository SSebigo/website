<template>
  <div class="w-full flex justify-center py-12 xl:py-20 2x:py-32">
    <Head>
      <Title>{{ $t('seo.experiences.title') }}</Title>
      <Meta
        name="description"
        content="{{ $t('seo.experiences.description') }}"
      />
    </Head>
    <ul class="mx-10 xl:mx-0 xl:w-5/6 2xl:w-3/4">
      <li
        v-for="(experience, idx) in workExperiencesStore.workExperiences"
        :key="experience.uid"
        class="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5"
      >
        <div
          v-if="idx % 2 === 1"
          class="hidden lg:block"
        />
        <div class="rounded-xl border p-5">
          <!-- Header -->
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <NuxtImg
                :src="experience?.companyLogo"
                class="w-14 h-14 rounded-full mr-5"
              />
              <div>
                <p class="font-light">
                  {{ $t(experience?.position) }}
                </p>
                <div class="flex items-center">
                  <p class="font-semibold">
                    {{ experience?.companyName }}
                  </p>
                  <a
                    v-if="experience?.companyLink"
                    :href="experience?.companyLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mx-1"
                  >
                    <Icon
                      name="mdi:external-link"
                      class="mt-1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-500">
                {{ $t(experience?.startDate) }} - {{ $t(experience?.endDate) }}
              </p>
            </div>
          </div>
          <!-- Description -->
          <div class="mx-2 my-5">
            <ul>
              <li class="mb-1">
                <p>{{ $t(experience?.description) }}</p>
              </li>
            </ul>
            <hr class="my-5">
            <a
              v-if="experience?.projectLink"
              :href="experience?.projectLink"
              target="_blank"
              class="text-sm underline"
            >
              {{ $t('seeMore') }}
            </a>
          </div>
          <!-- Footer -->
          <div class="w-full">
            <ul class="flex flex-wrap justify-start">
              <li
                v-for="lang in experience?.languages"
                :key="lang"
                class="m-1"
              >
                <TagChip
                  :text="lang"
                  color="bg-languages"
                />
              </li>
              <li
                v-for="framework in experience?.frameworks"
                :key="framework"
                class="m-1"
              >
                <TagChip
                  :text="framework"
                  color="bg-frameworks text-white"
                />
              </li>
              <li
                v-for="db in experience?.dbs"
                :key="db"
                class="m-1"
              >
                <TagChip
                  :text="db"
                  color="bg-dbs"
                />
              </li>
              <li
                v-for="tool in experience?.tools"
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
const workExperiencesStore = useWorkExperiencesStore()

onMounted(() => {
  workExperiencesStore.fetchWorkExperiences()
})
</script>

<style>

</style>
