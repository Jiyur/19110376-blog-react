import React from 'react';
import CommentForm from '../CommentForm';


function Comment(props) {
    const handleSubmit=(values)=>{
        console.log('Submit :'+ values);
    }
    return (
        <div>
            <CommentForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Comment;