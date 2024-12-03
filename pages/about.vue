<template>
  <div class="w-full flex justify-center py-32">
    <Head>
      <Title>{{ $t('seo.about.title') }}</Title>
      <Meta
        name="description"
        content="{{ $t('seo.about.description') }}"
      />
    </Head>
    <div class="w-2/3 grid grid-cols-2 justify-items-center">
      <NuxtImg
        src="pfp.jpeg"
        alt=""
        height="200"
        class="rounded-xl"
      />
      <div>
        <h1 class="font-merriweather text-3xl mb-5">
          {{ $t('ssebigo.hi') }}, {{ $t('ssebigo.me') }} SSebigo
        </h1>
        <div>
          <p class="">
            {{ $t('ssebigo.description') }}
          </p>
          <p class="whitespace-pre-line">
            {{ $t('about.description') }}
          </p>
        </div>
        <div class="mt-10">
          <NuxtLink
            :to="routes().contactRoute"
            class="border border-secondary-bis hover:bg-primary-bis hover:text-white px-4 py-2 rounded-full text-sm"
          >
            {{ $t('contactMe') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
