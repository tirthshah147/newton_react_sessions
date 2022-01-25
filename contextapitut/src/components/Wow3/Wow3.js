import React,{useContext} from 'react';
import { Message } from '../../App';

export default function Wow3() {
    const data = useContext(Message);
    console.log(data);
  return (
      <>
        {/* <Message.Consumer>
            {(data) => {
                return <div>{data.message} with id {data.id}</div>
            }}
        </Message.Consumer> */}
        <div>{data.message} with id {data.id}</div>
      </>
  );
}
