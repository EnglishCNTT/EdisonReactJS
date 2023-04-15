import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const params = useParams();
    const postId = params.postId;

    return (
        <div>
            POST ID = {postId}
        </div>
    )
}

export default PostDetails