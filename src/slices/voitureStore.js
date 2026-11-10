import { configureStore } from "@reduxjs/toolkit";
import voitureReducer from "./voitureSlice";

const store = configureStore({
  reducer: {
    voiture: voitureReducer,
  },
});

export default store;
