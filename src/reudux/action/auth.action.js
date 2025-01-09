import { auth, provider, signInWithPopup } from "../../firebase";
export const login = () => async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, provider);
      provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
      const userDetails = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        accessToken: result.user.stsTokenManager.accessToken,
      };
  
      // Save user details to localStorage
      localStorage.setItem('user', JSON.stringify(userDetails));
  
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: userDetails,
      });
    } catch (error) {
      console.error("Login Error:", error);
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.message,
      });
    }
  };
  export const logout = () => async (dispatch) => {
    try {

      localStorage.removeItem('user');  
      dispatch({
        type: "LOGOUT_SUCCESS",
      });
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };  
  