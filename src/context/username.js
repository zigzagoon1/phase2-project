import React, {useState, createContext} from "react";

const UsernameContext = createContext();

function UsernameProvider({children}) {
    const [username, setUsername] = useState("");
    const value = [username, setUsername];

    return (
        <UsernameContext.Provider value={value}>
            {children}
        </UsernameContext.Provider>
    )

}

export {UsernameContext, UsernameProvider};