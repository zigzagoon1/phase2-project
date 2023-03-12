import React, {useState, createContext} from "react";

const UsersContext = createContext();

function UsersProvider( {children} ) {
    const [users, setUsers] = useState([]);

    const value = [users, setUsers];

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    )
}   

export {UsersContext, UsersProvider}