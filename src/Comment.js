import React from "react";

function Comment( {username, text} ) {
    return (
        <div className="row row-cols-1 border border-dark">
          <div className="card-body">
            <p className="col-12">{username}: {text} </p>
          </div>
        </div>
    )
}

export default Comment;