import React, {useState} from "react";

function Username( {onSubmit, hasUsername} ) {
    const [username, setUsername] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(e.target.user_input.value);
    }
    function handleChange(e) {
        setUsername(e.target.value);
    }

    const usernameForm = <div className="col-9 px-p-3">
    <form onSubmit={handleSubmit}>
        <label className="px-2 fw-bold font-monospace">Enter Username to play: </label>
        <input className="" onChange={handleChange} type="text" name="user_input" value={username}></input>
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
        hasUsername ? usernameWelcome : usernameForm
    ) 
}

export default Username;