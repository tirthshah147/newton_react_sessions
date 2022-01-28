import React, { useContext } from 'react';
import './Card.css';
import { Theme } from '../../context/ContextProvider';

export default function Card() {
    const themeData = useContext(Theme);
    const {isDark} = themeData;
  return (
      <div className={isDark ? "card-container container--dark" : "card-container container--light"}>
         <h1>Blog1</h1>
         <h2>Lorem ipsum va srivalliiiii, jhukega nai..</h2>
         <h3>Author: Suraj</h3>
      </div>
  );
}
