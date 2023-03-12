import React, {useState, useContext} from "react";
import { UsernameContext } from "./context/username";

function AddCommentForm( {onSubmit} ) {
    const [input, setInput] = useState("");

    const [username, setUsername] = useContext(UsernameContext)

    function handleSubmit(e) {

    }
    function handleChange(e) {
        setInput(e.target.value)
    }

    const hasUsernameDiv =         <div className="container">
    <form className="row" onSubmit={handleSubmit}>
        <label className="col-3 m-auto" htmlFor="user_input">Add Comment:</label>
        <input className="col-6 text-wrap" type="text" name="user_input" onChange={handleChange} value={input}></input>
        <button className="btn btn-outline-dark col-2" type="submit">Submit</button>
    </form>
</div>

    const noUsername = <div className="container-fluid text-center">
        <h5>You must choose a username to add a comment! Go to the Home page to pick one.</h5>
    </div>
    return(
        username ? hasUsernameDiv : noUsername

    )
}

export default AddCommentForm;