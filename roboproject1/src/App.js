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
  

  onInputChange = async(val) => {
      await this.setState({searchField : val})
      console.log(this.state.searchField);
  }


  render(){
    const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
     
    return (
      <div className="tc">
        <h1>RoboProject</h1>
        <SearchBox onInputChange={this.onInputChange}/> 
        
        <CardList robots={filteredRobots}/>
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
