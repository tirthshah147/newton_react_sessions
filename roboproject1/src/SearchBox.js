import React from 'react'

export default function SearchBox({onInputChange}) {
    return (
        <div>
            <input 
                type='text' 
                placeholder="Search Robots" 
                className="pa3 ba b--green bg-lightest-blue"
                onChange={(event) => onInputChange(event)}/>
        </div>
    )
}


// () => {
//     onInputChange("tirth")
// }()

// (event) => onInputChange(event)

