import { createSlice } from "@reduxjs/toolkit";

const testing = createSlice({
  name: "testing",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = testing.actions;
export default testing.reducer;
