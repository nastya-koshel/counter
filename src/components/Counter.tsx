import {Scoreboard} from "./Scoreboard.tsx";
import {Button} from "./Button.tsx";
import {useState} from "react";

export const Counter = () => {

    const minScore = 0;
    const maxScore = 5;
    const [score, setScore] = useState<number>(minScore);

    const increaseScore = () => {
        return (score < maxScore && setScore(score + 1));
    }

    const resetScore = () => {
        setScore(minScore)
    }


    return (
        <div className="counter">
            <Scoreboard score={score} maxScore={maxScore}/>
            <div className="btnWrapper">
                <Button
                    title="inc"
                    onClick={() => increaseScore()}
                    disabled={score >= maxScore}/>
                <Button
                    title="reset"
                    onClick={() => resetScore()}
                    disabled={score === minScore}/>
            </div>
        </div>
    )
}