import React from "react";
import Comment from "./Comment";
function Comments( {comments = []} ) {
    const commentElements = comments.map((comment) => {
        const actualComments = comment.map((com) => {
            return <Comment key={Math.random()} username={com.username} text={com.text} />
        })
        return actualComments;
    })
    return (
        <div className="row my-3">
            {commentElements}
        </div>
    )
}

export default Comments;