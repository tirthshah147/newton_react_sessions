import React,{useContext} from 'react';
import Wow3 from '../Wow3/Wow3';
import { Greet } from '../../App';



export default function Wow2() {
    const greetMessage = useContext(Greet)
  return (
  <>
    <h1>{greetMessage}</h1>
    <Wow3/>
  </>
  
  );
}
