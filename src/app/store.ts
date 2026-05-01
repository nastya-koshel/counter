import {configureStore} from "@reduxjs/toolkit";
import {counterReducer, counterSlice} from "./counter-slice.tsx";
import {saveState} from "./localStorage.ts";

export const store = configureStore({
    reducer: {
        [counterSlice.name]: counterReducer,
    },
})

// store.subscribe(() => {
//     const counterState = selectCounter(store.getState());
//     saveState({
//         startValue: counterState.startValue,
//         maxValue: counterState.maxValue,
//         currentValue: counterState.currentValue,
//         tempStartValue: counterState.tempStartValue,
//         tempMaxValue: counterState.tempMaxValue,
//     });
// });

store.subscribe(() => {
    saveState(store.getState().counter.counter);
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
