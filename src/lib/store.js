import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice,
    },
  })
}
