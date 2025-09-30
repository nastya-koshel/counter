import {CounterSettingsInput} from "./CounterSettingsInput.tsx";

export const EnteringSettings = () => {
    return (
        <div className="settings-container">
            <CounterSettingsInput title={"MAX value"}/>
            <CounterSettingsInput title={"START value"}/>
        </div>
    )
}

