import {Scoreboard} from "./Scoreboard.tsx";
import {Button} from "../Button.tsx";
import {useEffect, useState} from "react";

type Props = {
    maxValue: number
    startValue: number
}

export const Counter = (props: Props) => {

    const minScore = props.startValue;
    const maxScore = props.maxValue;
    const [score, setScore] = useState<number>(minScore);

    const increaseScore = () => {
        return (score < maxScore && setScore(score + 1));
    }

    const resetScore = () => {
        setScore(minScore)
    }

    useEffect(()=>{
        const scoreAsString  = localStorage.getItem("score")
        if (scoreAsString) {
            const newScore = JSON.parse(scoreAsString);
            setScore(newScore);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("score", JSON.stringify(score));
    }, [score])

    return (
        <div className="counter-styles">
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