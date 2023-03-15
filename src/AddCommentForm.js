import React, {useState, useContext} from "react";
import { UsernameContext } from "./context/username";

function AddCommentForm( {onSubmit} ) {
    const [input, setInput] = useState("");

    const [username, setUsername] = useContext(UsernameContext)

    function handleSubmit(e) {
        e.preventDefault();
        const currentDate = new Date();
        let month;
        switch (currentDate.getMonth()) {
            default:  month = null;
                break;
            case 0: month = "January"
                break;
            case 1: month = "February"
                break;
            case 2: month = "March"
                break;
            case 3: month = "April"
                break;
            case 4: month = "May"
                break;
            case 5: month = "June"
                break;
            case 6: month = "July"
                break;
            case 7: month = "August"
                break;
            case 8: month = "September"
                break;
            case 9: month = "October"
                break;
            case 10: month = "November"
                break;
            case 11: month = "December"
                break;
        }
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();

        const date = `${month} ${day}, ${year}`;
        const time = " at " + currentDate.getHours() + ":" + currentDate.getMinutes(); 
        console.log(date);
        console.log(time);
        onSubmit(e.target.user_input.value, date, time);
    }
    function handleChange(e) {
        setInput(e.target.value)
    }

    const hasUsernameDiv =         <div className="container">
    <form className="row" onSubmit={handleSubmit}>
        <label className="col-3 m-auto px-2" htmlFor="user_input">Add Comment:</label>
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