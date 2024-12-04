<template>
  <div class="w-full lg:flex lg:justify-center py-12 lg:py-20 xl:py-32">
    <Head>
      <Title>{{ $t('seo.about.title') }}</Title>
      <Meta
        name="description"
        content="{{ $t('seo.about.description') }}"
      />
    </Head>
    <div class="mx-10 xl:w-2/3 grid lg:grid-cols-2 lg:justify-items-center">
      <NuxtImg
        src="pfp.jpeg"
        alt=""
        height="200"
        class="rounded-xl"
      />
      <div class="mt-12 lg:mt-0">
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
            class="bg-background border border-secondary-bis hover:bg-primary-bis hover:text-white px-4 py-2 rounded-full text-sm"
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
