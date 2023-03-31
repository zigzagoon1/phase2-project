import React, {useState, useEffect, useContext, useRef} from "react";
import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";
import { UsernameContext } from "./context/username";
import { PauseContext } from "./context/paused";
function CommentsPage( {comments, addComment} ) {
    const [username] = useContext(UsernameContext);
    const [paused, setPaused] = useContext(PauseContext);
    if (!paused) {
    setPaused(true);
    }
    const dateRef = useRef("today");
    const timeRef= useRef("now");

    function handleSubmit(value, date, time) {
        dateRef.current = date;
        timeRef.current = time;
        const userComment = {
            "username": username,
            "text": value,
            "date": date,
            "time": time,
            "likes": 0
        }
        fetch('http://localhost:3000/comments', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userComment)
        })
        .then(r=> r.json())
        .then((comment) => addComment(comment));
    }
    
    return (
        <div className="container" >
            <AddCommentForm onSubmit={handleSubmit}/>
            <Comments comments={comments} date={dateRef} time={timeRef} />
        </div>
    )
}

export default CommentsPage;