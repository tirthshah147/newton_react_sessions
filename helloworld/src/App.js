import React from 'react';
import LayoutComp from './Layout';
import ButtonType1 from './ButtonType1';

export default function App() {
    return (
        <>
            <LayoutComp greet={"Hii I am tirthhhhhh"} arr={["tirth","siva"]}>
                <h1>Page 1.1</h1>
                <h1>Page 1.2</h1>
            </LayoutComp>
            <LayoutComp greet={"Hii I am tirthhhhhh"} arr={["tirth","siva"]}>
                <h1>Page 2.1</h1>
                <h1>Page 2.2</h1>
            </LayoutComp>

            <ButtonType1 content={"Create Component"}/>
            <ButtonType1 content={"Create Component2"}/>
            
        </>
    )
}
