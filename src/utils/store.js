import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./barSlice";
const store = configureStore({
  reducer: {
    bar: barSlice,
  },
});
export default store;
