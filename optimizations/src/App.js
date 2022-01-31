// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useMemo, useState } from 'react';
// import Ugly from './Ugly';

// // render 1st : n = {name:"Pawan Kumar", likes:likes //1} -> 10
// //n is pointing to location with address 10


// //i chnaged state num
// //render 2nd : n = {name:"Pawan Kumar", likes:likes //1} -> 12
// //n is pointing to location with address 12


// function App() {
//   const [num,setNum] = useState(0);
//   const [likes,setLikes] = useState(1);

//   // let n = {name:"Pawan Kumar", likes:likes}
  // let n = useMemo(() => {
  //   return {name:"Pawan Kumar", likes:likes}
  // },[likes])

//   useEffect(() => {
//     console.log('n variable is changed')
//   },[n])

//   return (
//     <>
//       <div>
//         <button onClick={() => setNum(num+1)}>Increase</button>
//         My number is {num}
//         <br/>
//         <button onClick={() => setLikes(likes+1)}>Likes</button>
//         My likes are {likes}
//         <Ugly/>
//       </div>

//     </>
//   );
// }

// export default App;



import React, { useCallback, useState } from 'react';
import List from './List';

export default function App() {
  const [number,setNumber] = useState(1)
  const [likes,setLikes] = useState(false)

  const getItems = useCallback(() => {
    console.log("i am getting numbers...")
    return [number,number+1,number+2]
  },[number])

  return (
    <div>
      <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          />
      <List getItems={getItems}/>

      <button onClick={() => setLikes(likes+1)}>Likes</button>
      My likes are {likes}
      
    </div>
  );
}



