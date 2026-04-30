import './App.css';
import {Counter} from "../common/components/Counter/Counter.tsx";
import {CounterSettings} from "../common/components/CounterSettings/CounterSettings.tsx";


function App() {
    return (
        <div className="App">
            <CounterSettings />
            <Counter />
        </div>
    )
}

export default App

