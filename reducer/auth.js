import { createSlice } from "@reduxjs/toolkit";
import Auth from "../lib/Auth";
const auth = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: Auth.getToken ? true : false,
    user: Auth.getUserLogin ? Auth.getUserLogin : null,
  },
  reducers: {
    isLogin: (state, payload) => {
      state.isAuthenticated = payload;
    },
    user: (state, payload) => {
      state.user = payload;
    },
  },
});

export const { isLogin, user, session } = auth.actions;
export default auth.reducer;
