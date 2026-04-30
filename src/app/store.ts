import {configureStore} from "@reduxjs/toolkit";
import {counterReducer, counterSlice} from "./counter-slice.tsx";

export const store = configureStore({
    reducer: {
        [counterSlice.name]: counterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// window.store = store