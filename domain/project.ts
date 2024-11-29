import { z } from 'zod'

const ProjectSchema = z.object({
  uid: z.string(),
  name: z.string(),
  shortDescription: z.string(),
  description: z.array(z.string()),
  languages: z.array(z.string()),
  frameworks: z.array(z.string()),
  dbs: z.array(z.string()),
  tools: z.array(z.string()),
  gallery: z.array(z.string()),
  githubLink: z.string(),
  otherLink: z.string().optional(),
})

type IProject = z.infer<typeof ProjectSchema>

class Project implements IProject {
  uid: string
  name: string
  shortDescription: string
  description: string[]
  languages: string[]
  frameworks: string[]
  dbs: string[]
  tools: string[]
  gallery: string[]
  githubLink: string
  otherLink?: string

  constructor(data: IProject) {
    this.uid = data.uid
    this.name = data.name
    this.shortDescription = data.shortDescription
    this.description = data.description
    this.languages = data.languages
    this.frameworks = data.frameworks
    this.dbs = data.dbs
    this.tools = data.tools
    this.gallery = data.gallery
    this.githubLink = data.githubLink
    this.otherLink = data.otherLink
  }

  static create = (data: IProject) => {
    const project = ProjectSchema.parse(data)

    return new Project(project)
  }
}

export { type IProject, Project }
