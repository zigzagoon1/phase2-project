import React, {useState, useEffect} from "react";
import Score from './Score'

function Scores() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/scores`)
        .then((r => r.json()))
        .then((scores) => setScores(scores));
    }, [])

    //const scoreElements = scores.map
    console.log(scores);
    return (
        <div>

        </div>
    )
}

export default Scores;