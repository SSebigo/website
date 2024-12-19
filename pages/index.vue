<template>
  <div class="w-full lg:flex lg:flex-col lg:items-center pt-20 lg:pt-32">
    <Head>
      <Title>{{ $t('seo.home.title') }}</Title>
      <Meta
        name="description"
        :content="$t('seo.home.description')"
      />
    </Head>
    <div class="mx-3 md:mx-10 xl:w-3/4 2xl:w-2/3 grid lg:grid-cols-2 gap-10 xl:gap-20">
      <div class="flex flex-col items-center text-center lg:block lg:text-start">
        <NuxtImg
          src="pfp.jpeg"
          alt=""
          width="150"
          class="rounded-lg mb-2 lg:mb-5"
        />
        <div class="font-merriweather my-5">
          <h1 class="text-2xl lg:text-4xl mb-2">
            {{ $t('ssebigo.iAm') }} SSebigo
          </h1>
          <p class="text-base lg:text-lg">
            {{ $t('ssebigo.description') }}
          </p>
        </div>
      </div>
      <div>
        <div class="mb-5 lg:mb-10">
          <h1 class="text-center text-3xl lg:text-start lg:text-4xl xl:text-5xl font-merriweather">
            {{ $t('catchPhrase') }}
          </h1>
          <div class="w-full flex flex-cols justify-center lg:block py-5 lg:py-10">
            <NuxtLinkLocale
              :to="routes().contactRoute"
              class="border bg-background border-secondary-bis hover:bg-primary-bis hover:text-white px-4 py-2 rounded-full text-sm"
            >
              {{ $t('contactMe') }}
            </NuxtLinkLocale>
          </div>
        </div>
        <div class="w-full h-0.5 bg-secondary rounded-full mx-1" />
        <!-- Work experiences -->
        <div class="mb-10">
          <h2 class="font-merriweather my-3 text-lg">
            {{ $t('workExperiences') }}
          </h2>
          <ul>
            <li
              v-for="experience in workExperiencesStore.selectedWorkExperiences"
              :key="experience.uid"
              class="my-2"
            >
              <WorkExperienceTile
                :work-experience="experience"
                @toggle="(
                  value: boolean,
                  workExperience: IWorkExperience,
                ) => toggleWorkExperienceDialog(value, workExperience)"
              />
            </li>
          </ul>
        </div>
        <div class="w-full h-0.5 bg-secondary rounded-full mx-1" />
        <!-- Selected projects -->
        <div class="mb-10">
          <h2 class="font-merriweather my-3 text-lg">
            {{ $t('selectedProjects') }}
          </h2>
          <ul>
            <li
              v-for="project in projectsStore.selectedProjects"
              :key="project.uid"
              class="my-2"
            >
              <ProjectTile
                :project="project"
                @toggle="(
                  value: boolean,
                  project: IProject,
                ) => toggleProjectDialog(value, project)"
              />
            </li>
          </ul>
        </div>
        <div class="w-full h-0.5 bg-secondary rounded-full mx-1" />
        <!-- What I do -->
        <div class="mb-10">
          <h2 class="font-merriweather my-3 text-lg">
            {{ $t('whatIDo') }}
          </h2>
          <ul>
            <li class="w-full sm:flex sm:items-center rounded-xl border p-2 sm:p-5 my-2">
              <WhatIDoTile
                title="whatIDo1.title"
                description="whatIDo1.shortDescription"
                icon="mdi:apps"
              />
            </li>
            <li class="w-full sm:flex sm:items-center rounded-xl border p-2 sm:p-5 my-2">
              <WhatIDoTile
                title="whatIDo2.title"
                description="whatIDo2.shortDescription"
                icon="mdi:world-wide-web"
              />
            </li>
            <li class="w-full sm:flex sm:items-center rounded-xl border p-2 sm:p-5 my-2">
              <WhatIDoTile
                title="whatIDo3.title"
                description="whatIDo3.shortDescription"
                icon="mdi:art"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Dialog
      :open="isWorkExperienceDialogOpen"
      @update:open="(value: boolean) => toggleWorkExperienceDialog(value)"
    >
      <DialogContent class="rounded-lg max-w-80 sm:max-w-md xl:max-w-xl p-2 sm:p-6">
        <DialogHeader>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <NuxtImg
                :src="activeWorkExperience?.companyLogo"
                class="w-14 h-14 rounded-full mr-5"
              />
              <div>
                <p class="font-light">
                  {{ $t(activeWorkExperience?.position) }}
                </p>
                <div class="flex item-center">
                  <p class="font-semibold">
                    {{ activeWorkExperience?.companyName }}
                  </p>
                  <a
                    v-if="activeWorkExperience?.companyLink"
                    :href="activeWorkExperience?.companyLink"
                    target="_blank"
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
            <div class="hidden sm:block">
              <p class="text-sm text-gray-500">
                {{ $t(activeWorkExperience?.startDate) }} - {{ $t(activeWorkExperience?.endDate) }}
              </p>
            </div>
          </div>
        </DialogHeader>
        <div class="xl:mx-2">
          <p class="whitespace-pre-line max-h-80 sm:max-h-64 overflow-y-scroll xl:max-h-112 xl:overflow-auto">
            {{ $t(activeWorkExperience?.description) }}
          </p>
          <hr class="my-5">
          <a
            v-if="activeWorkExperience?.projectLink"
            :href="activeWorkExperience?.projectLink"
            target="_blank"
            class="text-sm underline"
          >
            {{ $t('seeMore') }}
          </a>
        </div>
        <DialogFooter>
          <div class="w-full">
            <ul class="flex flex-wrap justify-start">
              <li
                v-for="lang in activeWorkExperience?.languages"
                :key="lang"
                class="m-1"
              >
                <TagChip
                  :text="lang"
                  color="bg-languages"
                />
              </li>
              <li
                v-for="framework in activeWorkExperience?.frameworks"
                :key="framework"
                class="m-1"
              >
                <TagChip
                  :text="framework"
                  color="bg-frameworks text-white"
                />
              </li>
              <li
                v-for="db in activeWorkExperience?.dbs"
                :key="db"
                class="m-1"
              >
                <TagChip
                  :text="db"
                  color="bg-dbs"
                />
              </li>
              <li
                v-for="tool in activeWorkExperience?.tools"
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog
      :open="isProjectDialogOpen"
      @update:open="(value: boolean) => toggleProjectDialog(value)"
    >
      <DialogContent class="rounded-lg max-w-80 sm:max-w-md xl:max-w-xl">
        <DialogHeader>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <NuxtImg
                :src="activeProject?.projectLogo ?? 'https://placehold.co/200'"
                class="w-14 h-14 rounded-full mr-5"
              />
              <p class="font-semibold text-lg">
                {{ activeProject?.name }}
              </p>
            </div>
            <a
              :href="activeProject?.githubLink"
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
        </DialogHeader>
        <div class="xl:mx-2">
          <p class="whitespace-pre-line max-h-80 sm:max-h-64 overflow-y-scroll xl:max-h-112 xl:overflow-auto">
            {{ $t(activeProject?.description) }}
          </p>
          <hr class="my-5">
        </div>
        <DialogFooter>
          <div class="w-full">
            <ul class="flex flex-wrap justify-start">
              <li
                v-for="lang in activeProject?.languages"
                :key="lang"
                class="m-1"
              >
                <TagChip
                  :text="lang"
                  color="bg-languages"
                />
              </li>
              <li
                v-for="framework in activeProject?.frameworks"
                :key="framework"
                class="m-1"
              >
                <TagChip
                  :text="framework"
                  color="bg-frameworks text-white"
                />
              </li>
              <li
                v-for="db in activeProject?.dbs"
                :key="db"
                class="m-1"
              >
                <TagChip
                  :text="db"
                  color="bg-dbs"
                />
              </li>
              <li
                v-for="tool in activeProject?.tools"
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import type { IProject } from '~/domain/project'
import type { IWorkExperience } from '~/domain/work_experience'
import { Dialog, DialogContent, DialogHeader } from '~/components/ui/dialog'
import routes from '~/utils/routes'

const isWorkExperienceDialogOpen = ref(false)
const isProjectDialogOpen = ref(false)

const activeWorkExperience = ref<IWorkExperience | undefined>(undefined)
const activeProject = ref<IProject | undefined>(undefined)

const toggleWorkExperienceDialog = (value: boolean, workExperience?: IWorkExperience) => {
  if (workExperience) {
    activeWorkExperience.value = workExperience
  }

  isWorkExperienceDialogOpen.value = value
}

const toggleProjectDialog = (value: boolean, project?: IProject) => {
  if (project) {
    activeProject.value = project
  }

  isProjectDialogOpen.value = value
}

const workExperiencesStore = useWorkExperiencesStore()
const projectsStore = useProjectsStore()

onMounted(() => {
  workExperiencesStore.fetchWorkExperiences()
  projectsStore.fetchProjects()
})
</script>
