<template>
  <div class="w-full flex justify-center py-12 xl:py-20 2xl:py-32">
    <Head>
      <Title>{{ $t('seo.services.title') }}</Title>
      <Meta
        name="description"
        :content="$t('seo.services.description')"
      />
    </Head>
    <ul class="grid grid-cols-1 mx-2 sm:mx-10 lg:mx-10 lg:grid-cols-2 gap-5 xl:w-5/6 2xl:w-3/4">
      <li class="border rounded-xl p-3 sm:p-5">
        <div class="w-full flex items-center">
          <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background border">
            <Icon
              name="mdi:apps"
              size="24"
            />
          </div>
          <h2 class="font-merriweather mx-5">
            {{ $t('whatIDo1.title') }}
          </h2>
        </div>
        <p class="my-2 whitespace-pre-line">
          {{ $t('whatIDo1.description') }}
        </p>
        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="app-dev-item-1">
            <AccordionTrigger>{{ $t('alreadyDesign') }}</AccordionTrigger>
            <AccordionContent>
              {{ $t('whatIDo1.alreadyDesign') }}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="app-dev-item-2">
            <AccordionTrigger>{{ $t('noDesign') }}</AccordionTrigger>
            <AccordionContent>
              {{ $t('whatIDo1.noDesign') }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>
      <li class="hidden lg:block" />
      <li class="hidden lg:block" />
      <li class="border rounded-xl p-3 sm:p-5">
        <div class="flex items-center">
          <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background border">
            <Icon
              name="mdi:world-wide-web"
              size="24"
            />
          </div>
          <h2 class="font-merriweather mx-5">
            {{ $t('whatIDo2.title') }}
          </h2>
        </div>
        <p class="my-2 whitespace-pre-line">
          {{ $t('whatIDo2.description') }}
        </p>
        <Accordion
          type="single"
          collapsible
        >
          <AccordionItem value="showcase-dev-item-1">
            <AccordionTrigger>{{ $t('alreadyDesign') }}</AccordionTrigger>
            <AccordionContent>
              {{ $t('whatIDo2.alreadyDesign') }}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="showcase-dev-item-2">
            <AccordionTrigger>{{ $t('noDesign') }}</AccordionTrigger>
            <AccordionContent>
              {{ $t('whatIDo2.noDesign') }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>
      <li class="border rounded-xl p-3 sm:p-5">
        <div class="flex items-center">
          <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background border">
            <Icon
              name="mdi:art"
              size="24"
            />
          </div>
          <h2 class="font-merriweather mx-5">
            {{ $t('whatIDo3.title') }}
          </h2>
        </div>
        <p class="mt-2 sm:mt-5 whitespace-pre-line">
          {{ $t('whatIDo3.description') }}
        </p>
      </li>
      <li class="hidden lg:block" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Accordion, AccordionItem } from '~/components/ui/accordion'
</script>

<style>

</style>
