import {Button} from "../Button.tsx";
import {CounterSettingsInput} from "./CounterSettingsInput.tsx";
import {useEffect, useState} from "react";

type CounterSettingsPropsType = {
    maxValue: number;
    startValue: number;
    setStartValue: (value: number) => void;
    setMaxValue: (value: number) => void;
}

export const CounterSettings = (props: CounterSettingsPropsType) => {
    const [tempStartValue, setTempStartValue] = useState<number>(props.startValue);
    const [tempMaxValue, setTempMaxValue] = useState<number>(props.maxValue);

    useEffect(() => {
        setTempStartValue(props.startValue);
        setTempMaxValue(props.maxValue);
    }, [props.startValue, props.maxValue]);

    const setValue = () => {
        props.setStartValue(tempStartValue)
        props.setMaxValue(tempMaxValue)
    }

    return (
        <div className="counter-styles">
            <div className="settings-container">
                <CounterSettingsInput title={"MAX value"} value={tempMaxValue} setValue={setTempMaxValue} />
                <CounterSettingsInput title={"START value"} value={tempStartValue} setValue={setTempStartValue} />
            </div>
            <div className="btnWrapper">
                <Button onClick={setValue} title={'set'} disabled={false}/>
            </div>
        </div>
    )
}
