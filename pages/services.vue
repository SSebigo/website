<template>
  <div class="w-full flex justify-center py-32">
    <Head>
      <Title>{{ $t('seo.services.title') }}</Title>
      <Meta
        name="description"
        content="{{ $t('seo.services.description') }}"
      />
    </Head>
    <ul class="grid grid-cols-2 gap-5 w-2/3">
      <li class="border rounded-xl p-5">
        <div class="flex items-center">
          <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background-bis border">
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
      <li />
      <li />
      <li class="border rounded-xl p-5">
        <div class="flex items-center">
          <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background-bis border">
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
          <div class="w-12 h-12 flex justify-center items-center rounded-full bg-background-bis border">
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
      <li />
    </ul>
  </div>
</template>

<script lang="ts" setup>
</script>

<style>

</style>
