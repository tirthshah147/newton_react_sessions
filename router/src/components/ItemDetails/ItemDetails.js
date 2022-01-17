import React from 'react';
import courses from '../../data.json';


// map 
// filter
// reduce
// every
// indexof
// find



export default function ItemDetails(props) {
    const course = courses.find(c => c.id === props.match.params.id);
    return (
        <div>
            <img src={course.courseImage}/>
            {course.isHot}
            {course.title}
        </div>
    )
}
