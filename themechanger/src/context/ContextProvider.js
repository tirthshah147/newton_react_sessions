import React,{createContext, useState} from 'react';

export const Theme = createContext();

export default function ContextProvider(props) {
    console.log(props.children)
    const [isDark, setIsDark] = useState(false);
  return (
      <Theme.Provider value={{isDark, setIsDark}}>
         {props.children}
      </Theme.Provider>
  );
}


//Step1. Create context
//Step 2. Create provider
//Step 3. Give rights to components
//Step 4. provide data using provider created

// {isDark, setIsDark}
// {
//     isDark: isDark,
//     setIsDark : setIsDark
// }