import { configureStore } from "@reduxjs/toolkit";
import {Todoreducer} from "../features/todoSlice"
export const store= configureStore({
    reducer:Todoreducer
})