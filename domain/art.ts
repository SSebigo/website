import { z } from 'zod'

const ArtSchema = z.object({
  uid: z.string(),
  url: z.string(),
  alt: z.string(),
  type: z.string(),
})

type IArt = z.infer<typeof ArtSchema>

class Art implements IArt {
  uid: string
  url: string
  alt: string
  type: string

  constructor(data: IArt) {
    this.uid = data.uid
    this.url = data.url
    this.alt = data.alt
    this.type = data.type
  }

  static create = (data: IArt) => {
    const art = ArtSchema.parse(data)

    return new Art(art)
  }
}

export { type IArt, Art }
