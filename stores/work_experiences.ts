import { defineStore } from 'pinia'
import { WorkExperience, type IWorkExperience } from '~/domain/work_experience'

const allWorkExperiences: { [key: string]: IWorkExperience } = {
  qualis: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'Freelance lead developer',
    companyName: 'La Forge',
    companyLogo: 'LaForgeBlackLogo.png',
    description: [
      'For La Forge Powerlifting in Montpellier, I worked with the co-founder to create a sports coaching app.',
    ],
    startDate: 'March 2024',
    endDate: 'Now',
    languages: ['Dart', 'JavaScript', 'TypeScript'],
    frameworks: ['Flutter', 'Nuxt', 'Vue'],
    dbs: ['Firebase'],
    tools: ['VS Code'],
    link: 'https://lovely-torte-c68ac3.netlify.app/',
  }),
  evarisk: WorkExperience.create({
    uid: crypto.randomUUID(),
    position: 'Fullstack developer',
    companyName: 'Evarisk',
    companyLogo: 'EvariskLogo.png',
    description: [

      'For Evarisk, I worked on the development of risk assessment modules for the open source ERP & CRM Dolibarr.',
    ],
    startDate: 'May 2024',
    endDate: 'August 2024',
    languages: ['PHP', 'JavaScript'],
    frameworks: [],
    dbs: ['PostgreSQL'],
    tools: ['VS Code'],
    link: 'https://github.com/Evarisk',
  }),
}

export const useWorkExperiencesStore = defineStore('workExperiencesStore', () => {
  const workExperiences = ref<IWorkExperience[]>([])

  const fetchWorkExperiences = () => {}

  const selectedWorkExperiences = computed(() => [allWorkExperiences['qualis'], allWorkExperiences['evarisk']])

  return {
    workExperiences,
    fetchWorkExperiences,
    selectedWorkExperiences,
  }
})
