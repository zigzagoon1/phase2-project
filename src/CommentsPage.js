import React, {useState, useEffect, useContext} from "react";
import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";
import { UsernameContext } from "./context/username";
function CommentsPage() {
    const [username, setUsername] = useContext(UsernameContext);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(r => r.json())
        .then((comments) => setComments([comments]));
    }, [])

    function handleSubmit(value) {
        const userComment = {
            "username": username,
            "text": value
        }
        fetch('http://localhost:3000/comments', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userComment)
        })
        .then(r=> r.json())
        .then((comments) => setComments([comments]));
    }
    return (
        <div className="container-fluid flex-fill" >
            <AddCommentForm onSubmit={handleSubmit}/>
            <Comments comments={comments} />
        </div>
    )
}

export default CommentsPage;