import { auth, provider, signInWithPopup } from "../../firebase";
import { LOGIN_FAIL, LOGIN_OUT, LOGIN_PROFIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";
export const login = () => async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      })

      const result = await signInWithPopup(auth, provider);
      provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
       
       const accessToken =  result.user.stsTokenManager.accessToken
      
      const userDetails = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      }

      localStorage.setItem('user', JSON.stringify(userDetails));
      localStorage.setItem('accessToken', JSON.stringify(accessToken));
  
      dispatch({
        type: LOGIN_REQUEST,
        payload: accessToken,
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: userDetails,
      });
    } catch (error) {
      console.error("Login Error:", error);
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    }
  }
  
  export const logout = () => async (dispatch) => {
    try {

      localStorage.removeItem('user');  
      dispatch({
        type: LOGIN_OUT,
      });
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };  
  