import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEO_SUCCESS,
 } from '../actionType'
  
  const initialState = {
    videos: [],
    loading: false,
    error: null,
    nextPageToken: null,
    activeCategory: 'All',
  };
  
  const videoReducer = (
    state = {
       videos: [],
       loading: false,
       nextPageToken: null,
       activeCategory: 'All',
    },
    action
 ) => {
    const { type, payload } = action
 
    switch (type) {
       case HOME_VIDEO_SUCCESS:
          return {
             ...state,
             videos:
                state.activeCategory === payload.category
                   ? [...state.videos, ...payload.videos]
                   : payload.videos,
 
             loading: false,
             nextPageToken: payload.nextPageToken,
             activeCategory: payload.category,
          }
 
       case HOME_VIDEOS_FAIL:
          return {
             ...state,
             loading: false,
             error: payload,
          }
       case HOME_VIDEOS_REQUEST:
          return {
             ...state,
             loading: true,
          }
       default:
          return state
    }
 }
  
  
  export default videoReducer;
  