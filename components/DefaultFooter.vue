<template>
  <section>
    <div class="flex justify-between items-center bg-primary-bis rounded-full text-white m-8 py-4">
      <div class="flex items-center">
        <div class="flex items-center">
          <NuxtImg
            src="pfp.jpeg"
            alt=""
            width="75"
            class="rounded-full ml-10 mr-5"
          />
          <div>
            <h1 class="font-merriweather text-xl mb-1">
              I'm SSebigo
            </h1>
            <p class="text-sm w-64">
              Full-stack developer & art enjoyer from Montpellier, France.
            </p>
          </div>
        </div>
        <table class="mx-20 table-fixed text-sm">
          <tbody>
            <tr>
              <td class="px-5 py-2">
                <NuxtLink :to="routes().servicesRoute">
                  Services
                </NuxtLink>
              </td>
              <td class="px-5 py-2">
                <NuxtLink :to="routes().devRoute">
                  Dev projects
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2">
                <NuxtLink :to="routes().experiencesRoute">
                  Work experience
                </NuxtLink>
              </td>
              <td class="px-5 py-2">
                <NuxtLink :to="routes().artRoute">
                  Art gallery
                </NuxtLink>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2" />
              <td class="px-5 py-2">
                <NuxtLink :to="routes().aboutRoute">
                  About me
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <NuxtLink
        :to="routes().contactRoute"
        class="context-button"
      >
        Contact me
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
  hover:bg-primary
  hover:border
  px-4
  py-2
  rounded-full
  text-sm
  text-primary
  hover:text-background
  mx-10;
}
</style>
