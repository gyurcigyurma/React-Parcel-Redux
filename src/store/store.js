import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
