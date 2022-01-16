import React from 'react'

export default function OneCourse(props) {
    console.log(props)
    return (
        <div>
            One Course id that i m rendering rn is {props.match.params.courseId}
        </div>
    )
}
