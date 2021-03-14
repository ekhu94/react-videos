import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map(vid => {
        return <VideoItem />
    });
    return (
        <div>{ renderedList }</div>
    );
}

export default VideoList;