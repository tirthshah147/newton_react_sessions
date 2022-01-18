import React from 'react';
import BlogCard from '../../cards/BlogCard/BlogCard';


export default function BlogCotainer({posts}) {
    return (
        <div className='cardContainer'>
            {posts.map(post => <BlogCard currentPost={post}/> )}
        </div>
    )
}
