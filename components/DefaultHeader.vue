<template>
  <div class="w-full">
    <div class="hidden lg:flex lg:justify-between lg:items-center lg:px-10 xl:px-20 2xl:px-28 py-4">
      <ul class="flex items-center space-x-7 xl:space-x-10 text-sm">
        <li class="font-roboto font-normal text-lg mr-2 xl:mr-5">
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
          class="border bg-background border-secondary-bis hover:bg-primary-bis hover:text-white px-4 py-1 rounded-full text-sm mr-5"
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
    <div class="lg:hidden">
      <Drawer direction="left">
        <DrawerTrigger as-child>
          <Button
            class="bg-background m-5"
            variant="outline"
            size="icon"
          >
            <Icon
              name="mdi:menu"
              size="24"
            />
          </Button>
        </DrawerTrigger>
        <DrawerContent class="h-full min-w-xs max-w-72 sm:max-w-xs rounded-none bg-background-bis">
          <DrawerHeader>
            <DrawerTitle>
              <h1 class="font-roboto font-normal text-xl">
                <NuxtLink :to="routes().homeRoute">
                  SSebigo
                </NuxtLink>
              </h1>
            </DrawerTitle>
            <DrawerDescription />
          </DrawerHeader>
          <ul class="mx-5">
            <li class="my-5">
              <NuxtLink :to="routes().servicesRoute">
                {{ $t('services') }}
              </NuxtLink>
            </li>
            <li class="my-5">
              <NuxtLink :to="routes().experiencesRoute">
                {{ $t('workExperiences') }}
              </NuxtLink>
            </li>
            <li class="my-5">
              <NuxtLink :to="routes().devRoute">
                {{ $t('devProjects') }}
              </NuxtLink>
            </li>
            <li class="my-5">
              <NuxtLink :to="routes().artRoute">
                {{ $t('artGallery') }}
              </NuxtLink>
            </li>
            <li class="my-5">
              <NuxtLink :to="routes().aboutRoute">
                {{ $t('aboutMe') }}
              </NuxtLink>
            </li>
            <li class="my-5">
              <NuxtLink
                :to="routes().contactRoute"
                class="border bg-background border-secondary-bis hover:bg-primary-bis hover:text-white px-4 py-1 rounded-full text-sm mr-5"
              >
                {{ $t('contactMe') }}
              </NuxtLink>
            </li>
            <li class="flex items-center my-5">
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
            </li>
          </ul>
          <DrawerFooter>
            <DrawerClose as-child>
              <Button
                class="bg-background"
                variant="outline"
                size="icon"
              >
                <Icon
                  name="ic:baseline-close"
                  size="24"
                />
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import routes from '~/utils/routes'
import { Button } from '~/components/ui/button'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '~/components/ui/drawer'

const { locale, setLocale } = useI18n()
</script>
