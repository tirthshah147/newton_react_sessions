import React, { useEffect } from 'react';

function Ugly(props) {

    useEffect(() => {
        console.log("Ugly component is rendered");
    })

  return <div>I am ugly component</div>;
}


export default React.memo(Ugly);

// import React, { PureComponent } from 'react';


// export default class Ugly extends PureComponent {
//   render() {
//     return <div></div>;
//   }
// }

