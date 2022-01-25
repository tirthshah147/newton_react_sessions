import logo from './logo.svg';
import './App.css';
import Wow1 from './components/Wow1/Wow1';
import { useState,createContext } from 'react';

export const Message = createContext();
export const Greet = createContext();

function App() {
  const [message,setMessage] = useState("Hi, i am Sandeeps' Girlfriend")
  return (
    <Message.Provider value={{message:message, id:1}}>
      <Greet.Provider value={"Hi I am Sandeep"}>
        <Wow1/>
      </Greet.Provider>
    </Message.Provider>
  )
}


export default App;


//Context API

//Step1. Context
//Step2. Using context make provider. And provider will broadcast/provide message
//Step3. Giving rights to components to become consumer
//Step4. Those components who want to use this message becomes consumer & then they can use this message







