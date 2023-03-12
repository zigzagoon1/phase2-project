import React from "react";

function Comment( {username, text} ) {
    return (
        <div>
            <p>{username}: {text} </p>
        </div>
    )
}

export default Comment;