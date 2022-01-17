import React from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemsList/ItemList';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Jobs from './components/Jobs/Jobs';
import Error from './components/Error/Error';
import ItemDetails from './components/ItemDetails/ItemDetails';
import {Route, Redirect, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Navbar/>

       <Switch>
         <Route path='/home' exact component={ItemList}/>
         <Route path='/about' exact component={About}/>
         <Route path='/jobs' exact component={Jobs}/>
         <Route path='/courses' exact component={ItemList}/>
         <Route path='/blog' exact component={Blog}/>
         <Route path='/courses/:id' exact component={ItemDetails}/>
         
         <Redirect from='/' exact to='/home'/>
         <Route path='*' exact component={Error}/>
       </Switch>
    </div>
  );
}

export default App;
