import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    accessToken: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
    isAuthenticated: !!JSON.parse(localStorage.getItem('user')),
  };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("LOGIN_SUCCESS", (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase("LOGIN_FAILURE", (state, action) => {
        state.user = null;
        state.accessToken = null;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase("LOGOUT_SUCCESS", (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
