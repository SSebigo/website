<template>
  <div class="py-20">
    <Head>
      <Title>{{ $t('seo.art.title') }}</Title>
      <Meta
        name="description"
        :content="$t('seo.art.description')"
      />
    </Head>
    <div class="flex flex-col items-center">
      <h1 class="font-merriweather font-normal text-3xl mb-10">
        {{ $t('artGallery') }}
      </h1>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 mx-3 sm:mx-10 mt-10 space-y-3 sm:space-y-5">
        <NuxtImg
          v-for="(art, idx) in artStore.gallery"
          :key="art.uid"
          :src="art.url"
          :alt="art.alt"
          class="w-full rounded-lg cursor-pointer"
          @click="toggleArtDialog(true, art, idx)"
        />
      </div>
    </div>
    <Dialog
      :open="isArtDialogOpen"
      @update:open="(value: boolean) => toggleArtDialog(value)"
    >
      <DialogContent class="max-w-80 rounded-lg p-2 sm:max-w-sm sm:p-6 xl:max-w-md">
        <DialogHeader class="text-xl font-semibold font-merriweather mx-2">
          <DialogTitle>
            #{{ activeArtIdx + 1 }}
          </DialogTitle>
        </DialogHeader>
        <div class="w-full flex justify-center">
          <NuxtImg
            :src="activeArt?.url"
            :alt="activeArt?.alt"
            class="rounded-lg"
          />
        </div>
        <DialogFooter class="font-light tracking-wide">
          {{ activeArt?.alt }}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import type { IArt } from '~/domain/art'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'

const artStore = useArtStore()

const isArtDialogOpen = ref(false)
const activeArt = ref<IArt | null>(null)
const activeArtIdx = ref(-1)

const toggleArtDialog = (value: boolean, art?: IArt, idx?: number) => {
  if (art) {
    activeArt.value = art
  }
  if (idx) {
    activeArtIdx.value = idx
  }

  isArtDialogOpen.value = value
}

onMounted(() => {
  artStore.fetchGallery()
})
</script>

<style>

</style>
