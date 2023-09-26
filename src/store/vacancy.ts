import { VacancySlice } from '@/interface/vacancy'
import { createSlice } from '@reduxjs/toolkit'

const initialState: VacancySlice = {
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
  },
})

// Action creators are generated for each case reducer function
export const { overwrite } = vacancySlice.actions

export default vacancySlice.reducer
