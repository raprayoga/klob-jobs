import { configureStore } from '@reduxjs/toolkit'
import vacancySlice from './vacancy'

export default configureStore({
  reducer: {
    vacancy: vacancySlice,
  },
})
