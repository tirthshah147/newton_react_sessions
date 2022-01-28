import React, { useContext } from 'react';
import { Theme } from '../../context/ContextProvider';

export default function Button() {
    const themeData = useContext(Theme);
    const {isDark, setIsDark} = themeData;

  return <button onClick={() => setIsDark(!isDark)}>Make it {isDark ? 'Light' : 'Dark'}</button>;
}
