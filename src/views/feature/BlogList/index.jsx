import React from 'react';
import Blog from '../Blog/blog';
import './style.scss'

function BlogList({blogList}) {
    return (
        <ul className='blog__list' >
            {blogList.map(blog=>(
                <li key={blog.id}>
                    <Blog blog={blog}/>
                </li>
            ))}
        </ul>
    );
}

export default BlogList;    