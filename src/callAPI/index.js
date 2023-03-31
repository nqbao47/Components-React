import React, { useEffect, useState } from "react";

function CallAPI() {
    const [showUsers, setShowUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(showUsers => {
            setShowUsers(showUsers);
        })
    })

    return (
        <div>
            <ul>
                {showUsers.map(showUser => (
                    <li key={showUser.id}> {showUser.name} </li>
                ))}
            </ul>
        </div>
    )
}

export default CallAPI