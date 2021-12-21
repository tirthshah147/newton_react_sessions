import React from 'react';
import CardList from './CardList';
import robots from './data';
import SearchBox from './SearchBox';



// function App() {
//   return (
//     <div className="tc">
//       <h1>RoboProject</h1>
//       <CardList robots={robots}/>
//     </div>
//   );
// }

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      robots : robots,
      searchField : '',
    }
  }
  

  onInputChange = (event) => {
      this.setState({searchField : event.target.value})
  }

  render(){
    return (
      <div className="tc">
        <h1>RoboProject</h1>
        <SearchBox onInputChange={this.onInputChange}/>
        <CardList robots={this.state.robots}/>
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
