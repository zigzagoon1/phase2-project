import React from "react";

function Score( {score} ) {
    return (
        <div className="col">
            <h3 className="text-center fw-bold fs-2 pt-1 text-info">{score}</h3>
        </div>
    )
}

export default Score;