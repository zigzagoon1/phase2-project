import React, {useState} from "react";
import {Card} from 'react-bootstrap';


function Comment( {id, username, text, date, time, serverLikes} ) {
    const [likes, setLikes] = useState(serverLikes);
    const [firstClick, setFirstClick] = useState(true);

    function handleLike() {
        let numLikes = likes;

        if (firstClick) {
            numLikes = likes + 1;
            setFirstClick(false);
            
            }
            else if (!firstClick) {
                numLikes = likes - 1;
                setFirstClick(true);
            }

        fetch(`http://localhost:3000/comments/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            "likes": numLikes
        })})
        .then(r => r.json())
        .then((obj) => { 
            setLikes(obj.likes);
        })
    }    
    
    return (
        <Card className="row border border-dark d-flex">
          <Card.Header className="fw-bold col-12">{username} says:</Card.Header>
            <Card.Body className="row py-0">
                <p className="py-3 m-auto">{text}</p>
                <Card.Footer className="row m-auto w-100 p-0">
                        <p className="col-sm-4 col-8 m-0">{date}{time}</p>
                        <i className="col-1 py-1 far fa-thumbs-up text-center position-relative space-left2" onClick={handleLike}></i>
                        <p className="col-2 m-0">{likes} likes</p>
                        
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default Comment;