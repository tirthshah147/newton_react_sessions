import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';


export default function Item({course}) {
    return (
        <div className='course'>
            <div className="course__img--container">
                <img 
                    src={course.courseImage}
                    alt=""
                    className="course__img"
                />
            </div>
            <Link to={`/courses/${course.id}`}>
                <h2 className="course__title">{course.title}</h2>
            </Link>
            <span className="course__author">By: {course.author}</span>
            <span className="course__price">{course.price}</span>
            <span className={course.isHot ? "course__status hot" : "course__status"}>
                {course.isHot ? "Hot" : null}
            </span>

            {/* {course.isHot ? <span>Hot</span> : null} */}
        </div>
    )
}


//Load a react app
//We are getting all the files of all the pages
