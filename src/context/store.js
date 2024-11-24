import { configureStore } from "@reduxjs/toolkit";
import CodeSlicerReducer from "./Slicer/AddCode";

export const store = configureStore({
    reducer: {
        Code: CodeSlicerReducer
    }
})