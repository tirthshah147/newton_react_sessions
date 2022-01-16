import logo from './logo.svg';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Contactus from './components/Contactus';
import Home from './components/Home';
import Courses from './components/Courses';
import Notfound from './components/Notfound';
import OneCourse from './components/OneCourse';
import Page from './components/Page';





function App() {
  return (
    <>
      <div className="App">
        My Router Project
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' exact component={Contactus}/>
        <Route path='/mycourses' exact component={Courses}/>
        <Route path='/course/:courseId/details/' exact component={OneCourse}/>
        {/* <Route path='/mycourses' exact> 
            <Courses course1={"machine learning"}/>
        </Route> */}
        <Route path='/book/:month/:year' component={Page}/>
        <Route path='*' component={Notfound}/>
      </Switch>
    </>
  );
}

export default App;


// localhost:3000/mycourses/contactus

// path='/aboutus/personal'  Peronal1.js = localhost:3000/aboutus/personal
// path='/personal'  Peronal2.js =  localhost:3000/personal

// localhost:3000/personal

// localhost:3000 = Home.js = "/"
// localhost:3000/contact = Contactus.js = '/contact'
// localhost:3000/courses = Courses.js = '/courses'


// switch{
//   case 1:
//     console.log("Tirth1")
//     break;
//   case 2:
//     console.log("Tirt2")
//   case 3:
//     console.log("Tirt3")
//   default:
//     console.log("Tirthhhhhh")
// }





// xhcnzfsbbbam -> backend -> fetching all the date of course whose couseToken = xhcnzfsbbbam