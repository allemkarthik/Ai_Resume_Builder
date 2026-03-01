import { configureStore } from "@reduxjs/toolkit";
import atsReducer from "../store/atsSlice"

const appStore=configureStore(
    {
        reducer:{
            ats: atsReducer
        }
    }
)
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore