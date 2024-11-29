<template>
  <div class="flex justify-between items-center px-28 py-4">
    <ul class="flex items-center space-x-10 text-sm">
      <li class="font-roboto font-normal text-lg mr-5">
        <NuxtLink :to="routes().homeRoute">
          SSebigo
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().servicesRoute">
          Services
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().experiencesRoute">
          Work experience
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().devRoute">
          Dev projects
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().artRoute">
          Art gallery
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().aboutRoute">
          About me
        </NuxtLink>
      </li>
    </ul>
    <NuxtLink
      :to="routes().contactRoute"
      class="border border-secondary-bis px-4 py-1 rounded-full text-sm"
    >
      Contact me
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import routes from '~/utils/routes'
</script>
