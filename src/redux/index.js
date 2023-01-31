import { configureStore } from "@reduxjs/toolkit";
import managerSlice from "./slices/managerSlice";

export default configureStore({
  reducer: {
    managerPassword: managerSlice
  }
})