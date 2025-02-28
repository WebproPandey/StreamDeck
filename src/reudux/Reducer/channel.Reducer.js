import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS,  } from "../actionType"

 export const channelDetailsReducer =  (
   state ={
      loading:true,
      channel:{},
   },
   action

 ) =>{
   const { type, payload } = action
   switch(type) {
      case CHANNEL_DETAILS_REQUEST:
         return{
           ...state ,
            loading: true,           
      }
      case CHANNEL_DETAILS_SUCCESS:
         return {
            ...state,
             loading: false,
             channel: payload,

      }
      case CHANNEL_DETAILS_FAIL:
         return {
            ...state,
             channel:null,
             loading: false,
             error: payload,
      }
     

      default:
       return state
   }
      
 }

