import {counterStateType} from "./counter-slice.tsx";

// ЭТА ФУНКЦИЯ - загружает данные из localStorage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counter state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Ошибка загрузки:', err);
        return undefined;
    }
};

// ЭТА ФУНКЦИЯ - сохраняет данные в localStorage
export const saveState = (state: counterStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counter state', serializedState);
    } catch (err) {
        console.error('Ошибка сохранения:', err);
    }
};

// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e