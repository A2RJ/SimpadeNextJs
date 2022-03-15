import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducer/auth";
import testing from "./reducer/testing";

export const store = configureStore({
  reducer: {
    testingValue: testing,
    auth,
  },
});
