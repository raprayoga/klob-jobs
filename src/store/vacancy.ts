import { VacancySliceState } from '@/interface/vacancy'
import { createSlice } from '@reduxjs/toolkit'

const initialState: VacancySliceState = {
  isFirst: true,
  isBusy: false,
  data: [],
}

export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    overwrite(state, action) {
      if (state.isFirst) {
        state.data = action.payload
        state.isFirst = false
      }
    },
    sendApplication(state, action) {
      const index = state.data.findIndex(
        (vacancy) => vacancy.jobVacancyCode === action.payload
      )
      if (index >= 0) {
        const tempData = JSON.parse(JSON.stringify(state.data))
        tempData[index].applied = true
        state.data = tempData
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { overwrite, sendApplication } = vacancySlice.actions

export default vacancySlice.reducer
