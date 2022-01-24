import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App/App';
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

// function App(props){
//   console.log(props);
//   console.log(props.a)
//   return (
//          <>
//             <h1>Sum is {props.a + props.b}</h1>
//          </>
//   )
// }

{/* <div>
  <div>
    <div>hiii mummy</div>
  </div>
  <span>Hi daddy</span>
</div> */}

// const add = (a,b) => a + b;
// console.log(add(2,3));
// {greet, children} = {children : [h1, h1], greet : {name:"tirth", age:13}}


// {greet, children} = props

// props = {
//   greet : "Hii I am tirthhhhhh",
//   children : [h1, h1]
// }

// let {greet, children} = props;

// function run({name}){
//     console.log(name);
// }

// run({name:"tirth", age:13});

// let {name} = {name:"tirth", age:13}

// obj = {
//   name : "Tirth",
//   age : "13",
//   city : "vadodara"
// }

// const {name, age} = obj;


function run(){
  return "Hiii"
}

ReactDOM.render(
  <>
    {/* <App a={2} b={3} c={4}/>
    <App a={10} b={4}/> */}
    <App/>
    
  </>
,
  document.getElementById('root')
);


reportWebVitals();
