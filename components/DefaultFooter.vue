<template>
  <section>
    <div class="flex justify-between items-center bg-primary-bis rounded-full text-white m-8 py-4">
      <div class="flex items-center grow">
        <div class="flex items-center">
          <NuxtImg
            src="pfp.jpeg"
            alt=""
            width="75"
            class="rounded-full ml-10 mr-5"
          />
          <div>
            <h1 class="font-merriweather text-xl mb-1">
              {{ $t('ssebigo.iAm') }} SSebigo
            </h1>
            <p class="text-sm w-64">
              {{ $t('ssebigo.description') }}
            </p>
          </div>
        </div>
        <table class="mx-20 table-fixed text-sm">
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
      <NuxtLink
        :to="routes().contactRoute"
        class="context-button"
      >
        {{ $t('contactMe') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import routes from '~/utils/routes'
</script>

<style lang="postcss" scoped>
.context-button {
  @apply
  bg-background
  border
  border-primary-bis
  hover:bg-primary
  hover:border
  hover:border-background
  px-4
  py-2
  rounded-full
  text-sm
  text-primary
  hover:text-background
  mx-10;
}
</style>
