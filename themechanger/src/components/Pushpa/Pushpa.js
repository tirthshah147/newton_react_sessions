import React,{useContext} from 'react';
import Button from '../Button/Button';
import CardList from '../CardList/CardList';
import Heading from '../Heading/Heading';
import './Pushpa.css';
import { Theme } from '../../context/ContextProvider';

export default function Pushpa() {
    const themeData = useContext(Theme);
    const {isDark} = themeData;
  return (
      <div className={isDark ? "bg black-bg" : "bg white-bg"}>
        <Button/>
        <Heading/>
        <CardList/>
      </div>
  );
}
