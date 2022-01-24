import React from 'react';
import './Popup.css';

export default function Popup({user,closePopup}) {
  console.log(user);
  return (
    <div className="popup-container" onClick={closePopup}>
       <div className="popup-box">
            <div className="cancel-symbol" onClick={closePopup}>x</div>
            Name : {user.name}
            Email Id: {user.email}
            City : {user.address.city}
            Website : {user.website}
       </div>
    </div>
  )
  
}
