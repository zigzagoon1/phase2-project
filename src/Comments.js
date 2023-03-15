import React from "react";
import Comment from "./Comment";
function Comments( {comments = [], date, time} ) {
    const commentElements = comments.map((comment) => {
        const actualComments = comment.map((com) => {
            return <Comment key={Math.random()} id={com.id} username={com.username} 
            text={com.text} date={com.date} time={com.time}/>
        })
        return actualComments;
    })
    return (
        <div className="container my-3 px-5 py-5">
            {commentElements}
        </div>
    )
}

export default Comments;