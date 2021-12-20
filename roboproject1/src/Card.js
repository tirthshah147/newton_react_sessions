import React from 'react';

export default function Card({id, name, email}) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5' >
            <img src={`https://robohash.org/${id}`} alt="profile_img_roboproject"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
