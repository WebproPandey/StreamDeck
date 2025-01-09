import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEO_SUCCESS,
 } from '../actionType'
 
 import request from '../../utils/Youtubeapi'
 
 export const getPopularVideos = () => async (dispatch, getState) => {
   try {
     dispatch({
       type: HOME_VIDEOS_REQUEST,
     });
 
     const { HomeVideo } = getState();
     const nextPageToken = HomeVideo?.nextPageToken || '';
 
     const { data } = await request('/videos', {
       params: {
         part: 'snippet,contentDetails,statistics',
         chart: 'mostPopular',
         regionCode: 'IN',
         maxResults: 20,
         pageToken: nextPageToken,
       },
     });
 
     dispatch({
       type: HOME_VIDEO_SUCCESS,
       payload: {
         videos: data.items,
         nextPageToken: data.nextPageToken,
         category: 'All',
       },
     });
   } catch (error) {
     console.error(error.message);
     dispatch({
       type: HOME_VIDEOS_FAIL,
       payload: error.message,
     });
   }
 };
 
 export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
   try {
      dispatch({
         type: HOME_VIDEOS_REQUEST,
      });

      const nextPageToken = getState()?.HomeVideo?.nextPageToken || '';

      const { data } = await request('/search', {
         params: {
            part: 'snippet',
            maxResults: 20,
            pageToken: nextPageToken, // Use the accessed token here
            q: keyword,
            type: 'video',
         },
      });

      dispatch({
         type: HOME_VIDEO_SUCCESS,
         payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
            category: keyword,
         },
      });
   } catch (error) {
      console.error(error.message);
      dispatch({
         type: HOME_VIDEOS_FAIL,
         payload: error.message,
      });
   }
};
