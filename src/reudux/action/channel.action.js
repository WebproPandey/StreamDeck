import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
  SET_SUBSCRIPTION_REQUEST,
  SET_SUBSCRIPTION_STATUS,
} from "../actionType";
import request from "../../utils/Youtubeapi";

export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });
    const { data } = await request("/channels", {
      params: {
        part: "snippet , statistics ,contentDetails",
        id,
      },
    });
    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.message,
    });
  }
};


