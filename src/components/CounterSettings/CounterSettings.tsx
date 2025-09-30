import {Button} from "../Button.tsx";
import {EnteringSettings} from "./EnteringSettings.tsx";

export const CounterSettings = () => {
    return (
        <div className="counter-styles">
            <EnteringSettings />
            <div className="btnWrapper">
                <Button onClick={() => {}} title={'set'} disabled={false}/>
            </div>
        </div>
    )
}