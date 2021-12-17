import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// function App(){
//   return (
//     <>
//       <h1>Hiii Tirth!</h1>
//       <h2>Hii Sagar</h2>
//     </>
//   )
// }

// var hello = <h1>Hello</h1>

function App(props){
  console.log(props);
  console.log(props.a)
  return (
         <>
            <h1>Sum is {props.a + props.b}</h1>
         </>
  )
}

// const add = (a,b) => a + b;
// console.log(add(2,3));

ReactDOM.render(
  <>
    <App a={2} b={3}/>
    <App a={10} b={4}/>
  </>
,
  document.getElementById('root')
);


reportWebVitals();
