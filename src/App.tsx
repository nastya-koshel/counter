import './App.css';
import {Counter} from "./components/Counter/Counter.tsx";
import {CounterSettings} from "./components/CounterSettings/CounterSettings.tsx";

function App() {
    return (
        <div className="App">
            <CounterSettings />
            <Counter/>
        </div>
    )
}

export default App

