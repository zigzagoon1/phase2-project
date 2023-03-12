import React, {useState, useEffect} from "react";
import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";
function CommentsPage() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/comments')
        .then(r => r.json())
        .then((comments) => setComments(comments));
    })

    return (
        <div>
            <AddCommentForm />
            <Comments comments={comments} />
        </div>
    )
}

export default CommentsPage;