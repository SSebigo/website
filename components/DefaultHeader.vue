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
          {{ $t('services') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().experiencesRoute">
          {{ $t('workExperiences') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().devRoute">
          {{ $t('devProjects') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().artRoute">
          {{ $t('artGallery') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="routes().aboutRoute">
          {{ $t('aboutMe') }}
        </NuxtLink>
      </li>
    </ul>
    <div class="flex items-center">
      <NuxtLink
        :to="routes().contactRoute"
        class="border border-secondary-bis hover:bg-primary-bis hover:text-white px-4 py-1 rounded-full text-sm mr-5"
      >
        {{ $t('contactMe') }}
      </NuxtLink>
      <Icon
        name="twemoji:flag-france"
        size="24"
      />
      <Switch
        :checked="locale === 'en-US'"
        class="mx-2"
        @update:checked="setLocale(locale === 'en-US' ? 'fr-FR' : 'en-US')"
      />
      <Icon
        name="twemoji:flag-united-kingdom"
        size="24"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import routes from '~/utils/routes'

const { locale, setLocale } = useI18n()
</script>
