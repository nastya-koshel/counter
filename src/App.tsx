import './App.css';
import {Counter} from "./components/Counter/Counter.tsx";
import {CounterSettings} from "./components/CounterSettings/CounterSettings.tsx";
import {useState} from "react";

function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);

    return (
        <div className="App">
            <CounterSettings maxValue={maxValue} startValue={startValue} setStartValue={setStartValue} setMaxValue={setMaxValue} />
            <Counter maxValue={maxValue} startValue={startValue}/>
        </div>
    )
}

export default App

