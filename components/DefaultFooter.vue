<template>
  <div class="grid xl:flex xl:justify-between xl:items-center bg-primary-bis rounded-xl xl:rounded-full text-white m-4 xl:m-8 py-4">
    <div class="grid grid-cols-1 justify-items-center xl:flex xl:items-center xl:justify-start">
      <div class="grid grid-cols-1 justify-items-center xl:flex xl:items-center my-5 xl:m-0">
        <NuxtImg
          src="pfp.jpeg"
          alt=""
          width="75"
          class="mb-5 xl:mb-0 rounded-full xl:ml-10 xl:mr-5"
        />
        <div class="text-center xl:text-start">
          <h1 class="font-merriweather text-xl mb-1">
            {{ $t('ssebigo.iAm') }} SSebigo
          </h1>
          <p class="text-sm w-64">
            {{ $t('ssebigo.description') }}
          </p>
        </div>
      </div>
      <table class="w-full lg:w-1/2 xl:w-auto xl:mx-20 table-fixed text-sm text-center xl:text-start my-5 lg:my-10 xl:my-0">
        <tbody>
          <tr>
            <td class="px-5 py-2">
              <NuxtLink :to="routes().servicesRoute">
                {{ $t('services') }}
              </NuxtLink>
            </td>
            <td class="px-5 py-2">
              <NuxtLink :to="routes().devRoute">
                {{ $t('devProjects') }}
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td class="px-5 py-2">
              <NuxtLink :to="routes().experiencesRoute">
                {{ $t('workExperiences') }}
              </NuxtLink>
            </td>
            <td class="px-5 py-2">
              <NuxtLink :to="routes().artRoute">
                {{ $t('artGallery') }}
              </NuxtLink>
            </td>
          </tr>
          <tr>
            <td class="px-5 py-2" />
            <td class="px-5 py-2">
              <NuxtLink :to="routes().aboutRoute">
                {{ $t('aboutMe') }}
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="w-full xl:w-auto flex justify-around items-center">
      <div class="flex items-center">
        <a
          href="https://www.linkedin.com/in/françois-grèzes"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2"
        >
          <Icon
            name="mdi:linkedin"
            size="30"
            class="mx-2"
          />
        </a>
        <a
          href="https://https://github.com/SSebigo"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2"
        >
          <Icon
            name="mdi:github"
            size="30"
            class="mx-2"
          />
        </a>
        <a
          href="https://bsky.app/profile/ssebigo.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2"
        >
          <Icon
            name="ri:bluesky-fill"
            size="30"
            class="mx-2"
          />
        </a>
      </div>
      <div>
        <NuxtLink
          :to="routes().contactRoute"
          class="bg-background text-primary border border-primary-bis hover:bg-primary-bis hover:border-background hover:text-white rounded-full px-4 py-2 mx-10"
        >
          {{ $t('contactMe') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import routes from '~/utils/routes'
</script>

<style lang="postcss" scoped>
</style>
