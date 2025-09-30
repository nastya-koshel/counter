type CounterSettingsInputPropsType = {
    title: string,
}

export const CounterSettingsInput = (props: CounterSettingsInputPropsType) => {
    return (
        <div className="input-container">
           <span>{props.title}:</span>
            <input type="number"></input>
        </div>
    )
}

