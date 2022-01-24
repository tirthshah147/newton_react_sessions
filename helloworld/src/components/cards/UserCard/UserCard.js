import React from 'react';
import './UserCard.css';

export default function UserCard({currentUser,userClickedHandler}) {
    return (
        <div className='userCard--container' onClick={() => userClickedHandler(currentUser)}>
            <h1>User {currentUser.id}</h1>
            <h3>{currentUser.name}</h3>
        </div>
    )
}
