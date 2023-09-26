import { VacancySliceState } from './vacancy'
import { ToastSliceState } from './toast'

export interface sliceState {
  vacancy: VacancySliceState
  toast: ToastSliceState
}
