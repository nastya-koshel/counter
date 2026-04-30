import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {myTheme} from "../common/styles/Theme.styled.tsx";
import {GlobalStyles} from "../common/styles/GlobalStyles.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={myTheme}>
            <App/>
            <GlobalStyles/>
        </ThemeProvider>
    </Provider>
)
