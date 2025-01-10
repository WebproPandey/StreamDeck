import {
   HOME_VIDEOS_FAIL,
   HOME_VIDEOS_REQUEST,
   HOME_VIDEO_SUCCESS,
 } from '../actionType';
 
 import request from '../../utils/Youtubeapi';
 
 export const getPopularVideos = () => async (dispatch, getState) => {
   try {
     dispatch({
       type: HOME_VIDEOS_REQUEST,
     });
 
     const pageToken = getState().HomeVideo.nextPageToken; // Get nextPageToken from Redux state
     console.log("Page Token being used:", pageToken); // Log the value of pageToken
 
     const { data } = await request("/videos", {
       params: {
         part: "snippet,contentDetails,statistics",
         chart: "mostPopular",
         regionCode: "IN",
         maxResults: 20,
         pageToken: pageToken || "", // Use the token if it exists
       },
     });
 
     console.log("API Response:", data); // Log the response to confirm the token works
 
     dispatch({
       type: HOME_VIDEO_SUCCESS,
       payload: {
         videos: data.items,
         nextPageToken: data.nextPageToken || null, // Ensure token is updated
         category: "All",
       },
     });
   } catch (error) {
     console.log(error.message);
     dispatch({
       type: HOME_VIDEOS_FAIL,
       payload: error.message,
     });
   }
 };
 

export const getVideosByCategory = keyword => async (dispatch, getState) => {
  try {
     dispatch({
        type: HOME_VIDEOS_REQUEST,
     })
     const { data } = await request('/search', {
        params: {
           part: 'snippet',

           maxResults: 20,
           pageToken: getState().HomeVideo.nextPageToken,
           q: keyword,
           type: 'video',
        },
     })

     dispatch({
        type:HOME_VIDEO_SUCCESS,
        payload: {
           videos: data.items,
           nextPageToken: data.nextPageToken,
           category: keyword,
        },
     })
  } catch (error) {
     console.log(error.message)
     dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
     })
  }
}