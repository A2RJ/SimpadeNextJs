import auth from "../reducer/auth";
import { configureStore } from "@reduxjs/toolkit";
import testing from "../reducer/testing";

export const store = configureStore({
  reducer: {
    testing,
    auth,
  },
});
