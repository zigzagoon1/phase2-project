import React, {useState, useEffect, useContext} from "react";
import Score from './Score'
import { PauseContext } from "./context/paused";
function Scores() {
    const [scores, setScores] = useState([]);
    const [paused, setPaused] = useContext(PauseContext);
    setPaused(true);
    setPaused(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/scores`)
        .then((r => r.json()))
        .then((scores) => setScores(scores));
    }, [])

    const scoreElements = scores.map((score) => {
        return <Score key={score.id} username={score.username} score={score.score} />
    })
    console.log(scores);
    return (
        <div>

        </div>
    )
}

export default Scores;