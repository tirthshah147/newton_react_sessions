import React from 'react'
import UserCard from '../../cards/UserCard/UserCard'

export default function UserContainer({users}) {
    return (
        <div className='cardContainer'>
            {users.map(user => <UserCard currentUser={user}/>)}
        </div>
    )
}
