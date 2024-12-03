import { defineStore } from 'pinia'
import { WorkExperience, type IWorkExperience } from '~/domain/work_experience'

const allWorkExperiences: { [key: string]: IWorkExperience } = {
  laForge: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'laForge.position',
    companyName: 'La Forge',
    companyLogo: 'LaForgeBlackLogo.png',
    description: 'laForge.description',
    startDate: 'laForge.startDate',
    endDate: 'laForge.endDate',
    languages: ['Dart', 'JavaScript', 'TypeScript'],
    frameworks: ['Flutter', 'Nuxt', 'Vue'],
    dbs: ['Firebase'],
    tools: ['VS Code', 'Github', 'Figma', 'Trello'],
    companyLink: 'https://laforgepowerlifting.fr/',
    projectLink: 'https://lovely-torte-c68ac3.netlify.app/',
  }),
  evarisk: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'evarisk.position',
    companyName: 'Evarisk',
    companyLogo: 'EvariskLogo.png',
    description: 'evarisk.description',
    startDate: 'evarisk.startDate',
    endDate: 'evarisk.endDate',
    languages: ['PHP', 'JavaScript'],
    frameworks: [],
    dbs: ['PostgreSQL'],
    tools: ['VS Code', 'Github'],
    companyLink: 'https://github.com/Evarisk',
  }),
  yumi: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'yumi.position',
    companyName: 'Yumi',
    companyLogo: 'YumiLogo.jpeg',
    description: 'yumi.description',
    startDate: 'yumi.startDate',
    endDate: 'yumi.endDate',
    languages: ['Dart', 'Go'],
    frameworks: ['Flutter'],
    dbs: ['PostgreSQL'],
    tools: ['VS Code', 'Gitlab'],
    companyLink: 'https://yumi.club/',
  }),
  exatech: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'exatech.position',
    companyName: 'Exatech',
    companyLogo: 'ExatechLogo.jpeg',
    description: 'exatech.description',
    startDate: 'exatech.startDate',
    endDate: 'exatech.endDate',
    languages: ['Dart', 'Java'],
    frameworks: ['Flutter', 'Quarkus', 'Vue', 'Electron'],
    dbs: ['PostgreSQL'],
    tools: ['VS Code', 'Gitea', 'Taiga'],
    companyLink: 'https://exatech-group.com/homepage/',
    projectLink: 'https://exatech-group.com/creation-et-passation-d-examens-sur-tablettes/',
  }),
  airddm: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'airddm.position',
    companyName: 'AIRDDM',
    companyLogo: 'AirddmLogo.jpeg',
    description: 'airddm.description',
    startDate: 'airddm.startDate',
    endDate: 'airddm.endDate',
    languages: ['JavaScript', 'TypeScript', 'Python'],
    frameworks: ['Vue', 'Django'],
    dbs: ['PostgreSQL'],
    tools: ['VS Code', 'Github', 'Redmine'],
    companyLink: 'https://airddm.com/',
  }),
  witco: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'witco.position',
    companyName: 'Witco',
    companyLogo: 'WitcoLogo.jpeg',
    description: 'witco.description',
    startDate: 'witco.startDate',
    endDate: 'witco.endDate',
    languages: ['JavaScript'],
    frameworks: ['Node', 'Meteor', 'React'],
    dbs: ['MongoDB'],
    tools: ['VS Code', 'Bitbucket', 'Trello'],
    companyLink: 'https://witco.io/',
  }),
}

export const useWorkExperiencesStore = defineStore('workExperiencesStore', () => {
  const workExperiences = ref<IWorkExperience[]>([])

  const fetchWorkExperiences = () => {
    workExperiences.value = Object.values(allWorkExperiences)
  }

  const selectedWorkExperiences = computed(() => [
    allWorkExperiences['laForge'],
    allWorkExperiences['evarisk'],
    allWorkExperiences['exatech'],
  ])

  return {
    workExperiences,
    fetchWorkExperiences,
    selectedWorkExperiences,
  }
})
