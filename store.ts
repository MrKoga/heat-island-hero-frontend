import { configureStore } from "@reduxjs/toolkit"
import projectsDataReducer from "./projectsDataSlice"
import viewReducer from "./viewSlice"
import appReducer from "./appSlice"

const store = configureStore({
  reducer: {
    projects: projectsDataReducer,
    view: viewReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: [
          "projects.allProjectsData.submittedTimestamp",
          "projects.allProjectsData.completedTimestamp",
        ],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
