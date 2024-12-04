<template>
  <div class="w-full flex justify-center py-12 xl:py-20 2xl:py-32">
    <Head>
      <Title>{{ $t('seo.services.title') }}</Title>
      <Meta
        name="description"
        content="{{ $t('seo.services.description') }}"
      />
    </Head>
    <ul class="grid grid-cols-1 mx-10 lg:mx-10 lg:grid-cols-2 gap-5 xl:w-5/6 2xl:w-3/4">
      <li class="border rounded-xl p-5">
        <div class="flex items-center">
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
      </li>
      <li class="hidden lg:block" />
      <li class="hidden lg:block" />
      <li class="border rounded-xl p-5">
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
        <p class="mt-5 whitespace-pre-line">
          {{ $t('whatIDo2.description') }}
        </p>
      </li>
      <li class="border rounded-xl p-5">
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
        <p class="mt-5 whitespace-pre-line">
          {{ $t('whatIDo3.description') }}
        </p>
      </li>
      <li class="hidden lg:block" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>

</style>
