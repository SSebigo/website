<template>
  <div class="w-full flex flex-col items-center pt-32">
    <div class="w-2/3 grid grid-cols-2 gap-20">
      <div>
        <NuxtImg
          src="pfp.jpeg"
          alt=""
          width="150"
          class="rounded-lg mb-5"
        />
        <div class="font-merriweather my-5">
          <h1 class="text-4xl mb-2">
            I'm SSebigo
          </h1>
          <p class="text-lg">
            Full-stack developer & art enjoyer from Montpellier, France.
          </p>
        </div>
      </div>
      <div>
        <div class="mb-10">
          <h1 class="text-5xl font-merriweather">
            Tailor-made experiences for the digital era
          </h1>
          <div class="flex py-10">
            <NuxtLink
              :to="routes().contactRoute"
              class="border border-secondary-bis px-4 py-2 rounded-full text-sm"
            >
              Contact me
            </NuxtLink>
          </div>
        </div>
        <div class="w-full h-0.5 bg-secondary rounded-full mx-1" />
        <!-- Work experiences -->
        <div class="mb-10">
          <h2 class="font-merriweather my-3 text-lg">
            Work experiences
          </h2>
          <ul>
            <li
              v-for="experience in workExperiencesStore.selectedWorkExperiences"
              :key="experience.uid"
              class="my-2"
            >
              <button
                class="w-full flex justify-between items-center rounded-full border p-5"
                @click="toggleWorkExperienceDialog(true, experience)"
              >
                <div class="flex">
                  <NuxtImg
                    :src="experience.companyLogo"
                    class="w-14 rounded-full mr-5"
                  />
                  <div class="text-start">
                    <p class="font-light">
                      {{ experience.position }}
                    </p>
                    <p class="font-semibold">
                      {{ experience.companyName }}
                    </p>
                  </div>
                </div>
                <p class="text-sm text-gray-500">
                  {{ experience.startDate }} - {{ experience.endDate }}
                </p>
              </button>
            </li>
          </ul>
        </div>
        <div class="w-full h-0.5 bg-secondary rounded-full mx-2" />
        <!-- Selected projects -->
        <div class="mb-10">
          <h2 class="font-merriweather">
            Selected projects
          </h2>
          <ul>
            <li
              v-for="project in projectsStore.selectedProjects"
              :key="project.uid"
              class="my-2"
            >
              <button class="w-full flex justify-between items-center rounded-full border p-5">
                <p>{{ project.name }}</p>
                <p>{{ project.description }}</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Dialog
      :open="isWorkExperienceDialogOpen"
      @update:open="(value: boolean) => toggleWorkExperienceDialog(value)"
    >
      <DialogContent>
        <DialogHeader>
          <div class="flex justify-between items-center">
            <div class="flex">
              <NuxtImg
                :src="activeWorkExperience?.companyLogo"
                class="w-14 rounded-full mr-5"
              />
              <div>
                <p class="font-light">
                  {{ activeWorkExperience?.position }}
                </p>
                <p class="font-semibold">
                  {{ activeWorkExperience?.companyName }}
                </p>
              </div>
            </div>
            <div>
              <p class="text-sm text-gray-500">
                {{ activeWorkExperience?.startDate }} - {{ activeWorkExperience?.endDate }}
              </p>
            </div>
          </div>
        </DialogHeader>
        <div class="mx-2 my-5">
          <ul>
            <li
              v-for="task in activeWorkExperience?.description"
              :key="task"
              class="mb-1"
            >
              <p>{{ task }}</p>
            </li>
          </ul>
          <hr class="my-5">
          <a
            v-if="activeWorkExperience?.link"
            :href="activeWorkExperience?.link"
            target="_blank"
            class="text-sm underline"
          >
            Learn more
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
  </div>
</template>

<script lang="ts" setup>
import type { IWorkExperience } from '~/domain/work_experience'
import routes from '~/utils/routes'

const isWorkExperienceDialogOpen = ref(false)

const activeWorkExperience = ref<IWorkExperience | undefined>(undefined)

const toggleWorkExperienceDialog = (value: boolean, workExperience?: IWorkExperience) => {
  if (workExperience) {
    activeWorkExperience.value = workExperience
  }

  isWorkExperienceDialogOpen.value = value
}

const workExperiencesStore = useWorkExperiencesStore()
const projectsStore = useProjectsStore()

onMounted(() => {
  workExperiencesStore.fetchWorkExperiences()
  projectsStore.fetchProjects()
})
</script>
