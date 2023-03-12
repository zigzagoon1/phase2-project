import React from "react";
import Comment from "./Comment";
function Comments( {comments} ) {
    const commentElements = comments.map((comment) => {
        return <Comment username={comment.username} text={comment.text} />
    })
    return (
        <div>

        </div>
    )
}

export default Comments;