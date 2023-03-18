import React from "react";
import Comment from "./Comment";
function Comments( {comments = []} ) {
    const commentElements = comments.map((comment) => {
            return <Comment key={Math.random()} id={comment.id} username={comment.username} 
            text={comment.text} date={comment.date} time={comment.time} serverLikes={comment.likes}/>
    })
    return (
        <div className="container my-3 px-5 py-5">
            {commentElements}
        </div>
    )
}

export default Comments;