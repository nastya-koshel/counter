
type ScorePropsType = {
    score: number
    maxScore: number
}

export const Scoreboard = ({score,maxScore}:ScorePropsType) => {
    const scoreStyle = score < maxScore
        ? {color: "#3a3a3a"}
        : {color:"red", border: "2px solid red"}

    return (
        <div className="scoreboard" style={scoreStyle}>
            {score}
        </div>
    );
};

