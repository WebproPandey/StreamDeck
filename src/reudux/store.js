import { configureStore  } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth.Reducer";
import  videoReducer  from "./Reducer/Video.Reducer"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    HomeVideo: videoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, 
      serializableCheck: false, 
    }),
});
