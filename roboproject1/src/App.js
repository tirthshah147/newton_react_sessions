import React from 'react';
import CardList from './CardList';
import robots from './data';

// function App() {
//   return (
//     <div className="tc">
//       <h1>RoboProject</h1>
//       <CardList robots={robots}/>
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    return (
      <div className="tc">
        <h1>RoboProject</h1>
        <CardList robots={robots}/>
      </div>
    );
  }
}

// class compoenntName extends React.Component{
//   render(){
//     return (

//     )
//   }
// }


export default App;
