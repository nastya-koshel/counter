import {createAppSlice} from "./createAppSlice.ts";
import {loadState} from "./localStorage.ts";

export type counterStateType = {
    startValue: number,
    maxValue: number,
    currentValue: number,
    tempStartValue: number,
    tempMaxValue: number,
}

const savedState = loadState();

const defaultState: counterStateType = {
    startValue: 0,
    maxValue: 100,
    currentValue: 0,

    tempStartValue: 0,
    tempMaxValue: 0,
}

const counterState: counterStateType = savedState || defaultState;

export const counterSlice = createAppSlice({
    name: 'counter',
    initialState: {
        counter: counterState
    },
    reducers: (create) => ({
        setStartValueAC: create.reducer<number>((state, action) => {
            state.counter.tempStartValue = action.payload;
        }),
        setMaxValueAC: create.reducer<number>((state, action) => {
            state.counter.tempMaxValue = action.payload;
        }),
        applySettingsAC: create.reducer((state) => {
            state.counter.startValue = state.counter.tempStartValue;
            state.counter.maxValue = state.counter.tempMaxValue;
            state.counter.currentValue = state.counter.tempStartValue;
        }),
        incrementAC: create.reducer((state) => {
            state.counter.currentValue = state.counter.currentValue + 1
        }),
        resetAC: create.reducer((state) => {
            state.counter.currentValue = state.counter.startValue
        }),
    }),
    selectors: {
        selectCounter: state => state.counter,
    }
})

export const {setStartValueAC, setMaxValueAC, applySettingsAC, incrementAC, resetAC} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
export const {selectCounter} = counterSlice.selectors;