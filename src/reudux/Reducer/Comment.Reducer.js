import { COMMENTS_LIST_FAIL, COMMENTS_LIST_REQUEST, COMMENTS_LIST_SUCCESS, SET_SUBSCRIPTION_STATUS } from "../actionType"

 export const commentListReducer =  (
   state ={
      loading:true,
      comments:null,
   },
   action

 ) =>{
   const { type, payload } = action
   switch(type) {
      case COMMENTS_LIST_REQUEST:
         return{
           ...state ,
            loading: true,           
      }
      case COMMENTS_LIST_SUCCESS:
         return {
            ...state,
             loading: false,
             comments: payload,

      }
      case COMMENTS_LIST_FAIL:
         return {
            ...state,
             comments:null,
             loading: false,
             error: payload,
      }
     

      default:
       return state
   }
      
 }

