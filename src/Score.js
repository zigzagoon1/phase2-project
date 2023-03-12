import React from "react";

function Score( {score} ) {
    return (
        <div className="col">
            <h3 className="text-center text-info py-0 m-auto">Score:</h3>
            <h3 className="text-center fw-bold fs-2 pt-1 py-0 text-info">{score}</h3>
        </div>
    )
}

export default Score;