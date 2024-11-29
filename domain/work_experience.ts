import { z } from 'zod'

const WorkExperienceSchema = z.object({
  uid: z.string(),
  position: z.string(),
  companyName: z.string(),
  companyLogo: z.string(),
  description: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  languages: z.array(z.string()),
  frameworks: z.array(z.string()),
  dbs: z.array(z.string()),
  tools: z.array(z.string()),
  link: z.string(),
})

type IWorkExperience = z.infer<typeof WorkExperienceSchema>

class WorkExperience implements IWorkExperience {
  uid: string
  position: string
  companyName: string
  companyLogo: string
  description: string[]
  startDate: string
  endDate: string
  languages: string[]
  frameworks: string[]
  dbs: string[]
  tools: string[]
  link: string

  constructor(data: IWorkExperience) {
    this.uid = data.uid
    this.position = data.position
    this.companyName = data.companyName
    this.companyLogo = data.companyLogo
    this.description = data.description
    this.startDate = data.startDate
    this.endDate = data.endDate
    this.languages = data.languages
    this.frameworks = data.frameworks
    this.dbs = data.dbs
    this.tools = data.tools
    this.link = data.link
  }

  static create = (data: IWorkExperience) => {
    const Workexperience = WorkExperienceSchema.parse(data)

    return new WorkExperience(Workexperience)
  }
}

export { type IWorkExperience, WorkExperience }
