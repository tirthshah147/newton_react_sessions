import React from 'react';
import './BlogCard.css';

export default function BlogCard({currentPost}) {
    return (
        <div className='blogCard--container'>
            <h1>Blog {currentPost.id}</h1>
            <h3>{currentPost.title}</h3>
        </div>
    )
}
