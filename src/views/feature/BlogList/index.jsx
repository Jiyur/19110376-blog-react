import React from 'react';
import Blog from '../Blog/blog';
import './style.scss'

function BlogList({blogList,onDelete}) {
    const handleClick = () => {
        onDelete()
    }
    return (
        blogList.map(blog=>(
            <Blog key={blog.id} blog={blog} onDelete={handleClick}/>
        ))
    );
}

export default BlogList;    