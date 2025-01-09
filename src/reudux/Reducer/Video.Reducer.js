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
    category: 'All',
  };
  
  const videoReducer = (state = initialState, action) => {
    switch (action.type) {
      case HOME_VIDEOS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case HOME_VIDEO_SUCCESS:
        return {
          ...state,
          loading: false,
          videos: action.payload.videos,
          nextPageToken: action.payload.nextPageToken,
          category: action.payload.category,
        };
      case HOME_VIDEOS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default videoReducer;
  