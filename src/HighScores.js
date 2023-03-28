import React, {useState, useEffect, useContext} from "react";
import HighScore from './HighScore'
import { PauseContext } from "./context/paused";
function HighScores() {
    const [scores, setScores] = useState([]);
    const [paused, setPaused] = useContext(PauseContext);
    if (!paused) {
        setPaused(true);
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/scores`)
        .then((r => r.json()))
        .then((scores) => {
            console.log(scores);
            scores.sort((a, b) => b.score - a.score);
            setScores(scores);
        })
    }, [])

    const scoreElements = scores.map((score) => {
        return <HighScore key={score.id} username={score.username} score={score.score} />
    })
    
    return (
        <div className="container justify-content-center border text-center py-3">
            <div className="row fa">
                <div className="col border pt-2 border-danger border-3">
                    <h1 className="fw-bold border border-danger border-4 font-monospace">HIGH SCORES</h1>
                </div>
            </div>
            <div className="py-3">
                {scoreElements}
            </div>
        </div>
    )
}

export default HighScores;