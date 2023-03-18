import React from 'react';

function HighScore( {username, score} ) {
    return (
        <div className='row font-monospace px-3 justify-content-center'>  
            <p className='col col-3 border border-2 border-dark'>{username} : {score}</p>
        </div>
    )
}

export default HighScore;