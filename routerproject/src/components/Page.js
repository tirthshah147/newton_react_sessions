import React from 'react'

export default function Page(props) {
    console.log(props)
    return (
        <div>
            All the text u have written in month {props.match.params.month} and year {props.match.params.year} is here!
        </div>
    )
}
