import { defineStore } from 'pinia'
import { type IProject, Project } from '~/domain/project'

const allProjects: { [key: string]: IProject } = {
  ahhhhhh: Project.create({
    uid: crypto.randomUUID(),
    name: 'Ahhhhhh',
    shortDescription: 'An app that screams and moans',
    description: ['Ahhhhhh is an app that screams and moans.'],
    languages: ['Dart'],
    frameworks: ['Flutter'],
    dbs: ['Firebase'],
    tools: ['VS Code'],
    gallery: ['https://via.placeholder.com/150'],
    githubLink: 'https://github.com/SSebigo/ahhhhhh',
    otherLink: 'https://play.google.com/store/apps/details?id=io.killy.ahhhhhh&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
  }),
  forktale: Project.create({
    uid: crypto.randomUUID(),
    name: 'Forktale',
    shortDescription: 'A collaborative story writing app',
    description: ['Forktale is a collaborative story writing app.'],
    languages: ['Dart'],
    frameworks: ['Flutter'],
    dbs: ['Firebase'],
    tools: ['VS Code'],
    gallery: ['https://via.placeholder.com/150'],
    githubLink: 'https://github.com/KillyIO/wine',
  }),
}

export const useProjectsStore = defineStore('projectsStore', () => {
  const projects = ref<IProject[]>([])

  const fetchProjects = () => {
    projects.value = Object.values(allProjects)
  }

  const selectedProjects = computed(() => [allProjects['ahhhhhh']])

  return {
    projects,
    fetchProjects,
    selectedProjects,
  }
})
