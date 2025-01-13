import { configureStore  } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth.Reducer";
import  videoReducer ,{relatedVideoReducer, selectedVideoReducer, SerachVideoReducer }  from "./Reducer/Video.Reducer"
import { channelDetailsReducer } from "./Reducer/channel.Reducer";
import { commentListReducer } from "./Reducer/Comment.Reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    HomeVideo:videoReducer,
    SelectedVideo :selectedVideoReducer,
    ChannelDetails :channelDetailsReducer,
    relatedVideos: relatedVideoReducer,
    CommentList :commentListReducer,
    SerachVideo:SerachVideoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, 
      serializableCheck: false, 
    }),
});
