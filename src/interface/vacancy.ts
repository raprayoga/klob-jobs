export interface Vacancy {
  jobVacancyCode: string
  positionName: string
  corporateId: string
  corporateName: string
  status: string
  descriptions: string
  corporateLogo: 'https://filesdev.klob.id/public/mco01/kzsb9qzp/2022-02-18_175846.jpg'
  applied: boolean | null
  salaryFrom: number | null
  salaryTo: number | null
  postedDate: string
}

export interface VacancySlice {
  isFirst: boolean
  isBusy: boolean
  data: Vacancy[]
}
