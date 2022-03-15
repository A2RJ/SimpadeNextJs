import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const auth = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    isLogin: (state) => {
      state.isAuthenticated = Cookies.get("token");
    },
    user: (state) => {
      state.user = null;
    },
  },
});

export const { isLogin, user } = auth.actions;
export default auth.reducer;
