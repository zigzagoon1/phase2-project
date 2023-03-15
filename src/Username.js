import React, {useState, useContext} from "react";
import { UsernameContext } from "./context/username";

function Username( {onSubmit = null} ) {
    const [username, setUsername] = useContext(UsernameContext);
    const [userInput, setUserInput] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setUsername(e.target.user_input.value);
        if (onSubmit) {
        onSubmit(e.target.user_input.value);

        }
    }
    function handleChange(e) {
        setUserInput(e.target.value);
    }

    const usernameForm = <div className="col-9 px-p-3">
    <form onSubmit={handleSubmit}>
        <label className="px-2 py-2 mt-4 fw-bold font-monospace">Enter Username to play: </label>
        <input className="" onChange={handleChange} type="text" name="user_input" value={userInput}></input>
        <button className="btn btn-sm border-1 btn-outline-dark mx-1" type="submit">Submit</button>
    </form>
  </div>
    const usernameWelcome = 
    <div className="col-12 text-decoration-underline text-center">
    <div className="row">
        <h3 className="">Welcome, {username}!</h3>
    </div>
    </div>
    return (
        username ? usernameWelcome : usernameForm
    ) 
}

export default Username;