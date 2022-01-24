import React from 'react'
import UserCard from '../../cards/UserCard/UserCard'

export default function UserContainer({users,userClickedHandler}) {
    return (
        <div className='cardContainer'>
            {users.map(user => <UserCard currentUser={user} userClickedHandler={userClickedHandler}/>)}
        </div>
    )
}
