import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "./heroesSlice";


export default configureStore({
    reducer: heroesReducer
})