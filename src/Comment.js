import React, {useState} from "react";
import {Card} from 'react-bootstrap';


function Comment( {id, username, text, date, time, onLike, numLikes} ) {
    const [likes, setLikes] = useState(0);
    let firstClick = true;

    function handleLike() {
        if (firstClick) {
        setLikes(likes + 1);
        }
        else if (!firstClick) {
            setLikes(likes - 1);
        }
        fetch(`${process.REACT_APP_API_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            "likes": likes
        })
    }
        )
    }
    return (
        <Card className="row border border-dark d-flex" s>
          <Card.Header className="fw-bold col-12">{username} says:</Card.Header>
            <Card.Body className="row py-0">
                <p className="py-3 m-auto">{text}</p>
                <Card.Footer className="row m-auto w-100 p-0">
                        <p className="col-8 m-0">{date}{time}</p>
                        <i className="col-2 py-1 p-0 far fa-thumbs-up" onClick={handleLike}></i>
                        <p className="col-2 m-0 p-0">{numLikes} likes</p>
                        
                </Card.Footer>

            </Card.Body>
        </Card>
    )
}

export default Comment;