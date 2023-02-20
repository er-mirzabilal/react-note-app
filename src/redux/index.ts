import { configureStore } from "@reduxjs/toolkit";

import notesReducer from "./noteSlice";
import addItemReducer from "./openModeSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    items: addItemReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
