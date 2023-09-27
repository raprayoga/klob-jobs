export interface Vacancy {
  jobVacancyCode: string
  positionName: string
  corporateId: string
  corporateName: string
  status: string
  descriptions: string
  corporateLogo: string
  applied: boolean | null
  salaryFrom: number | null
  salaryTo: number | null
  postedDate: string
}

export interface VacancyForm {
  positionName: string
  corporateName: string
  status: string
  descriptions: string
  corporateLogo: string
  salaryFrom: number | string
  salaryTo: number | string
  postedDate: string
}

export interface VacancySliceState {
  isFirst: boolean
  isBusy: boolean
  data: Vacancy[]
}
