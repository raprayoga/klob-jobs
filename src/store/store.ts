import { configureStore } from '@reduxjs/toolkit'
import vacacncyReducer from './vacancy'
import toastReducer from './toast'

export default configureStore({
  reducer: {
    toast: toastReducer,
    vacancy: vacacncyReducer,
  },
})
