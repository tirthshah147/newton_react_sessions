import React,{useState} from 'react'
import Item from '../Item/Item';
import data from '../../data.json';
import './ItemList.css'

export default function ItemList() {
    const [courses, setCourses] = useState(data);
    console.log(courses);
    return (
        <div className="courses">
            {courses.map(course => (
                <Item course={course} key={course.id}/>
            ))}
        </div>
    )
}
