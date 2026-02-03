import type { ThunkAction, Action } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import playgroundReducer from "../components/playground/slices/index.ts"
export const store = configureStore({
  reducer: {
    playground: playgroundReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
