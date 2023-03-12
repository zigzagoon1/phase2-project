import React, {useState, useEffect, useContext} from "react";
import { PauseContext } from "./paused";


function Timer( {hasUsername, gameOverLose} ) {
    const [time, setTime] = useState(90);
    const [paused, setPaused] = useContext(PauseContext)
    let timeout;
    if (hasUsername && !paused) {
        timeout = setTimeout(() => {
            setTime(time - 1);
            
            // if (time === 56 || time === 51 || time === 46 || time === 41 || time === 36 || time === 31
            //     || time === 26 || time === 21 || time === 16 || time === 11 || time === 6) {
            //         deductFromScore();
            //     }
            if (time <= 10) {
                const p = document.querySelector("p#timer");
                p.className += " text-danger"
            }

        }, 1000)
    }
    if (time < 1) {
        setPaused(true);
        gameOverLose(true, null, null);
        clearTimeout(timeout);
    }

    return (
        <div className="col text-center p-0">
            <p id="timer" className="fw-bolder fs-1">{time}</p>
        </div>
    )
}

export default Timer;