import { defineStore } from 'pinia'
import { Art, type IArt } from '~/domain/art'

const allArt: IArt[] = [
  Art.create({
    uid: crypto.randomUUID(),
    url: 'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:xqnnjro6cdvvzcoymxmag4jl/bafkreiaegqwp26t5uw4y7xcezfuygq36ikjefifssnt2gjq5ra6gblmt4m@jpeg',
    alt: '',
    type: 'image',
  }),
  Art.create({
    uid: crypto.randomUUID(),
    url: 'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:xqnnjro6cdvvzcoymxmag4jl/bafkreidluv7ea64zjuknmrrzwwk4obyjyz5vojay4dqxxmk7zwi6frheeu@jpeg',
    alt: '',
    type: 'image',
  }),
  Art.create({
    uid: crypto.randomUUID(),
    url: 'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:xqnnjro6cdvvzcoymxmag4jl/bafkreiggiopxbd5u5ngh7ag3ukaahdcook43tyliym4q5cbzticefiwb5a@jpeg',
    alt: 'Godot exhausted sits on a floor full of grass',
    type: 'image',
  }),
]

export const useArtStore = defineStore('artStore', () => {
  const gallery = ref<IArt[]>([])

  const fetchGallery = () => {
    gallery.value = allArt
  }

  const selectedGallery = computed(() => gallery.value)

  return {
    gallery,
    fetchGallery,
    selectedGallery,
  }
})
