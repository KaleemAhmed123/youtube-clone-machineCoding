import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./barSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    search: searchSlice,
    bar: barSlice,
  },
});
export default store;
