
type CounterSettingsInputPropsType = {
    title: string,
    value: number,
    setValue: (value: number ) => void,
}

export const CounterSettingsInput = (props: CounterSettingsInputPropsType) => {

    return (
        <div className="input-container">
            <span>{props.title}:</span>
            <input type="number" value={props.value} onChange={(e) => {props.setValue(e.currentTarget.valueAsNumber)}} ></input>
        </div>
    )
}

