import React from 'react';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import './mainpost.css'

const MainPostContainer = () => {
    return (
        <div className='mainPostContainer'>
        <ContentPost></ContentPost>
        <Post></Post>
        </div>
    );
};

export default MainPostContainer;