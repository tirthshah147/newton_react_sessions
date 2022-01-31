import React, { useEffect, useState } from 'react';

function List({getItems}) {
    const [items,setItems] = useState([]);
    useEffect(() => {
        setItems(getItems());
        console.log("I am changing items")
    },[getItems])
  return items.map((item) => <div key={Math.random()}>{item}</div>);
}

export default React.memo(List)